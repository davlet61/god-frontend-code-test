import type { NextApiRequest, NextApiResponse } from 'next';
import cars from '../../../public/api/cars.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const found = cars.filter(car => car.id === req.query.id);

  if (found.length === 0) {
    return res
      .status(404)
      .json({ message: `Car with the id of ${req.query.id} is not found` });
  }
  return res.status(200).json(found);
}
