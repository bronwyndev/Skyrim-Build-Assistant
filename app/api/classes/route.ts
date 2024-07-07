import { NextResponse } from 'next/server';
import { classes } from '../../../data/classes';

export const GET = async () => {
  return NextResponse.json(classes);
};