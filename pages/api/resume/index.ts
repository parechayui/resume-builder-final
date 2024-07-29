import { ApiError } from '@/lib/errors';
import { createBaseResume, getBaseResume, updateBaseResume } from 'models/baseResume';
import type { NextApiRequest, NextApiResponse } from 'next';
import { recordMetric } from '@/lib/metrics';
import { baseResumeSchema, validateWithSchema } from '@/lib/zod';
import { getCurrentUser } from 'models/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        await handleGET(req, res);
        break;
      case 'POST':
        await handlePOST(req, res);
        break;
      case 'PATCH':
          await handlePATCH(req, res);
          break;
      default:
        res.setHeader('Allow', 'GET, POST');
        res.status(405).json({
          error: { message: `Method ${method} Not Allowed` },
        });
    }
  } catch (error: any) {
    const message = error.message || 'Something went wrong';
    const status = error.status || 500;

    res.status(status).json({ error: { message } });
  }
}

// Get base resume
const handleGET = async (req: NextApiRequest, res: NextApiResponse) => {
 const user = await getCurrentUser(req, res);
 const baseResume = await getBaseResume({userId: "12e1a4de-4598-48f1-ae83-f02b3c1a08ae"});

 // recordMetric('team.fetched');

  res.status(200).json({ data: baseResume });
}

// Create a base resume
const handlePOST = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await getCurrentUser(req, res);
  const { userId, resume, keywords } = req.body;
  const baseResume = await createBaseResume({
    userId,
    resume,
    keywords
  });

 // recordMetric('baseResume.created');
  res.status(200).json({ data: baseResume }); 
};


// Create a base resume
const handlePATCH = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await getCurrentUser(req, res);
  const { userId, resume, keywords } = req.body;
  const baseResume = await updateBaseResume(userId, resume, keywords);

 // recordMetric('baseResume.created');
  res.status(200).json({ data: baseResume }); 
};