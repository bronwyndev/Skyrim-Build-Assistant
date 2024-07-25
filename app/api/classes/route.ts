import { NextResponse } from 'next/server';
import { classes } from '../../../data/classes';

export const GET = async () => {
  return NextResponse.json(classes);
};

export const POST = async () => {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export const DELETE = async () => {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export const PUT = async () => {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export const PATCH = async () => {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}