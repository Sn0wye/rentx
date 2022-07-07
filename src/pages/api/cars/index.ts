// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { CarsAPIResponse } from '../../../@types/car';
import { Error } from '../../../@types/error';
import { prisma } from '../../../utils/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarsAPIResponse | Error>
) {
  if (req.method === 'GET') {
    const response = await prisma.car.findMany();
    res.status(200).json({ data: response });
    return;
  }
  res.status(405).json({
    error: { code: 405, message: 'Method not allowed on this route' },
  });
}
