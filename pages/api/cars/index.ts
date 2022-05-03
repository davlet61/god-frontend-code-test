import type { NextApiRequest, NextApiResponse } from 'next';
import cars from '../../../public/api/cars.json';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cars);
}
