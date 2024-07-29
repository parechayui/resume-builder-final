import { prisma } from '@/lib/prisma';
// import { getSession } from '@/lib/session';
// import { findOrCreateApp } from '@/lib/svix';
// import { Role, Team } from '@prisma/client';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { getCurrentUser } from './user';
// import { normalizeUser } from './user';
// import { validateWithSchema } from '@/lib/zod';

//Create Base Resume
export const createBaseResume = async (param: {
  userId: string;
  resume: object;
  keywords: object;
}) => {
  const { userId, resume, keywords } = param;

  const baseResume = await prisma.baseResume.create({
    data: {
        userId,
        resume,
        keywords
    },
  });
  return baseResume;
};


//Get base resume
export const getBaseResume = async (key: { userId: string }) => {
  return await prisma.baseResume.findUniqueOrThrow({
    where: key,
  });
};



//Upsert or UpdateBase Resume
export const updateBaseResume = async (userId: string, resume,keywords) => {
  return await prisma.baseResume.upsert({
    create: {
      userId,
      resume,
      keywords,
    },
    update: {
      resume,
      keywords
    },
    where: {
      userId
    },
  });
};

