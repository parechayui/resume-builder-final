import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/session';
import { findOrCreateApp } from '@/lib/svix';
import { Role, Team } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentUser } from './user';
import { normalizeUser } from './user';
import { validateWithSchema, teamSlugSchema } from '@/lib/zod';

export const manageBaseResume = async (param: {
  userId: string;
  name: string;
  slug: string;
  resume: object;
  user: object;
}) => {
  const { userId, name, slug, resume, user } = param;

  const baseResume = await prisma.baseResume.create({
    data: {
        userId,
        resume
    },
  });

  return baseResume;
};



export const getBaseResume = async (key: { id: string }) => {
  return await prisma.baseResume.findUniqueOrThrow({
    where: key,
  });
};

export const deleteTeam = async (key: { id: string } | { slug: string }) => {
  return await prisma.team.delete({
    where: key,
  });
};

export const saveBaseResume = async (
  userId: string,
  resume: object
) => {
  return await prisma.teamMember.upsert({
    create: {
      teamId,
      userId,
      role,
    },
    update: {
      role,
    },
    where: {
      teamId_userId: {
        teamId,
        userId,
      },
    },
  });
};


// Get the current user's team member object
export const getTeamMember = async (userId: string, slug: string) => {
  return await prisma.teamMember.findFirstOrThrow({
    where: {
      userId,
      team: {
        slug,
      },
      role: {
        in: ['ADMIN', 'MEMBER', 'OWNER'],
      },
    },
    include: {
      team: true,
    },
  });
};



// Check if the current user has access to the team
// Should be used in API routes to check if the user has access to the team
export const throwIfNoTeamAccess = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession(req, res);

  if (!session) {
    throw new Error('Unauthorized');
  }

  const { slug } = validateWithSchema(teamSlugSchema, req.query);

  const teamMember = await getTeamMember(session.user.id, slug);

  if (!teamMember) {
    throw new Error('You do not have access to this team');
  }

  return {
    ...teamMember,
    user: {
      ...session.user,
    },
  };
};


