import { NextApiRequest, NextApiResponse } from 'next';
import { CarsAPIResponse } from '../../../@types/car';
import { Error } from '../../../@types/error';
import { prisma } from '../../../utils/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarsAPIResponse | Error>
) {
  if (req.method === 'GET') {
    const carId = Number(req.query.carId);
    if (isNaN(carId)) {
      return res.status(415).json({
        error: {
          code: 415,
          message: `Unsupported Media Type, the sent payload format was 'Not a Number'`,
        },
      });
    }
    const response = await prisma.car.findUniqueOrThrow({
      where: { id: carId },
    });
    res.status(200).json({ data: response });
    return;
  }
  res.status(405).json({
    error: { code: 405, message: 'Method not allowed on this route' },
  });
}
