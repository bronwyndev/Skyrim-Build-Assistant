import { PerkTree } from '../models/perk';

export const perkTrees: PerkTree[] = [
  {
    id: 'alch',
    name: 'Alteration',
    domain: 'Magic',
    perks: [
      {
        id: 'perk1',
        name: 'Novice Alteration',
        description: 'Cast Novice level Alteration spells for half magicka.',
        levels: 1,
        coords: { x: 50, y: 100 },
      },
      {
        id: 'perk2',
        name: 'Apprentice Alteration',
        description: 'Cast Apprentice level Alteration spells for half magicka.',
        levels: 1,
        coords: { x: 55, y: 40 },
      },
    ],
  },
  {
    id: 'conj',
    name: 'Conjuration',
    domain: 'Magic',
    perks: [
      {
        id: 'perk3',
        name: 'Novice Conjuration',
        description: 'Reduces noise while moving by 20%',
        levels: 1,
        coords: { x: 50, y: 100 },
      },
      {
        id: 'perk4',
        name: 'Summoner',
        description: 'Can summon atronachs or raise undead twice as far away.',
        levels: 2,
        coords: { x: 10, y: 50 },
      },
    ],
  },
  {
    id: 'dest',
    name: 'Destruction',
    domain: 'Magic',
    perks: [
      {
        id: 'perk3',
        name: 'Novice Destruction',
        description: 'Cast Novice level Destruction spells for half magicka.',
        levels: 1,
        coords: { x: 50, y: 100 },
      },
      {
        id: 'perk4',
        name: 'Augmented Flames',
        description: 'Fire spells do 25% more damage.',
        levels: 2,
        coords: { x: 20, y: 40 },
      },
    ],
  },
];