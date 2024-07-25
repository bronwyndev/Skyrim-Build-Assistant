// pages/api/classes/[id]
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { Class } from '../../../../models/class';

const sourceURL = process.env.API_URL + '/classes';

export const GET = async (req: Request) => {
  const id = req.url.slice(req.url.lastIndexOf('/') + 1);
  
  const res = await fetch(`${sourceURL}`);

  const classesData: Class[] = await res.json();

  const classData = classesData.find((c) => c.id === id);

  if (!classData) {
    return NextResponse.json({ error: 'Class not found' }, { status: 404 });
  }

  return NextResponse.json(classData);
}