// pages/api/classes/[id]/perks
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const sourceURL = process.env.API_URL + '/classes';

export const GET = async (req: Request) => {
  const urlParts = req.url.split('/');
  const id = urlParts[urlParts.length - 2]; // Get the ID from the URL
  
  const res = await fetch(`${sourceURL}/${id}`);

  const classData = await res.json();

  const perks = classData.perks;

  if (!perks) {
    return NextResponse.json({ error: 'Perks for class ' + id + ' not found' }, { status: 404 });
  }

  return NextResponse.json(perks);
}