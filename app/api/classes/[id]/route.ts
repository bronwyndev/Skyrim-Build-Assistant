// pages/api/classes/[id]/perks.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { classes } from '../../../../data/classes';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // Get the class ID from the query parameter

  // Find the class by ID
  const classData = classes.find(c => c.id === id);

  if (classData) {
    // If the class is found, return it
    res.status(200).json(classData);
  } else {
    // If the class is not found, return a 404 error
    res.status(404).json({ message: 'Class not found' });
  }
}