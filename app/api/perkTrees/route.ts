import { NextResponse } from 'next/server';
import { perkTrees } from '../../../data/perkTrees';
import { PerkTree } from '../../../models/perk';

export const GET = async () => {
  return NextResponse.json(perkTrees);
};