import type { NextApiRequest, NextApiResponse } from 'next';

export default function handleAnimal(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { animal },
  } = req;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: `Your favorite animal is ${animal}` }));
}
