import { PerkTree } from '../models/perk';

export const perkTrees: PerkTree[] = [
  {
    id: 'illu',
    name: 'Illusion',
    domain: 'Magic',
    canvasSize: 'large',
    perks: [
      {
        id: '000f2ca9',
        name: 'Novice Illusion',
        description: 'Cast Novice level Illusion spells for half magicka.',
        ranks: 1,
        coords: { x: 54, y: 90 },
        prereq: null,
      },
      {
        id: '000c44c3',
        name: 'Apprentice Illusion',
        description: 'Cast Apprentice level Illusion spells for half magicka.',
        ranks: 1,
        coords: { x: 24, y: 60 },
        prereq: ['000f2ca9'],
      },
      {
        id: '000c44c4',
        name: 'Adept Illusion',
        description: 'Cast Adept level Illusion spells for half magicka.',
        ranks: 1,
        coords: { x: 27, y: 40 },
        prereq: ['000c44c3'],
      },
      {
        id: '000c44c5',
        name: 'Expert Illusion',
        description: 'Cast Expert level Illusion spells for half magicka.',
        ranks: 1,
        coords: { x: 26, y: 28 },
        prereq: ['000c44c4'],
      },
      {
        id: '000c44c6',
        name: 'Master Illusion',
        description: 'Cast Master level Illusion spells for half magicka.',
        ranks: 1,
        coords: { x: 42, y: 14 },
        prereq: ['000c44c5'],
      },
      {
        id: '00059b77',
        name: 'Hypnotic Gaze',
        description: 'Calm spells now work on higher level opponents. Cumulative with Kindred Mage and Animage.',
        ranks: 1,
        coords: { x: 50, y: 54 },
        prereq: ['000f2ca9'],
      },
      {
        id: '00059b78',
        name: 'Aspect of Terror',
        description: 'Fear spells work on higher level opponents. Cumulative with Kindred Mage and Animage.',
        ranks: 1,
        coords: { x: 42, y: 34 },
        prereq: ['00059b77'],
      },
      {
        id: '000c44b5',
        name: 'Rage',
        description: 'Frenzy spells work on higher level opponents. Cumulative with Kindred Mage and Animage.',
        ranks: 1,
        coords: { x: 48, y: 30 },
        prereq: ['00059b78'],
      },
      {
        id: '00059b76',
        name: 'Master of the Mind',
        description: 'Illusion spells work on undead, daedra, and automatons.',
        ranks: 1,
        coords: { x: 58, y: 17 },
        prereq: ['000c44b5', '000581fd'],
      },
      {
        id: '000581e1',
        name: 'Animage',
        description: 'Illusion spells now work on higher level animals.',
        ranks: 1,
        coords: { x: 80, y: 70 },
        prereq: ['000f2ca9'],
      },
      {
        id: '000581e2',
        name: 'Kindred Mage',
        description: 'All Illusion spells work on higher level people.',
        ranks: 1,
        coords: { x: 65, y: 47 },
        prereq: ['000581e1'],
      },
      {
        id: '000581fd',
        name: 'Quiet Casting',
        description: 'All spells you cast from any school of magic are silent to others.',
        ranks: 1,
        coords: { x: 63, y: 32 },
        prereq: ['000581e2'],
      },
      {
        id: '000153d0',
        name: 'Dual Casting',
        description: 'Dual casting an Illusion spell overcharges the effects into an even more powerful version.',
        ranks: 1,
        coords: { x: 10, y: 87 },
        prereq: ['000f2ca9'],
      },
    ]
  },
  {
    id: 'conj',
    name: 'Conjuration',
    domain: 'Magic',
    canvasSize: 'standard',
    perks: [
      {
        id: 'perk3',
        name: 'Novice Conjuration',
        description: 'Cast Novice level Conjuration spells for half magicka.',
        ranks: 1,
        coords: { x: 50, y: 90 },
        prereq: null,
      },
      {
        id: 'perk36',
        name: 'Apprentice Conjuration',
        description: 'Cast Apprentice level Conjuration spells for half magicka.',
        ranks: 1,
        coords: { x: 88, y: 60 },
        prereq: ['perk3'],
      },
      {
        id: 'perk37',
        name: 'Adept Conjuration',
        description: 'Cast Adept level Conjuration spells for half magicka.',
        ranks: 1,
        coords: { x: 92, y: 40 },
        prereq: ['perk36'],
      },
      {
        id: 'perk38',
        name: 'Expert Conjuration',
        description: 'Cast Expert level Conjuration spells for half magicka.',
        ranks: 1,
        coords: { x: 88, y: 28 },
        prereq: ['perk37'],
      },
      {
        id: 'perk39',
        name: 'Master Conjuration',
        description: 'Cast Master level Conjuration spells for half magicka.',
        ranks: 1,
        coords: { x: 68, y: 14 },
        prereq: ['perk38'],
      },
      {
        id: 'perk4',
        name: 'Summoner',
        description: 'Can summon atronachs or raise undead twice as far away.',
        ranks: 2,
        coords: { x: 8, y: 60 },
        prereq: ['perk3'],
      },
      {
        id: 'perk27',
        name: 'Atromancy',
        description: 'Double duration for conjured Atronachs.',
        ranks: 1,
        coords: { x: 5, y: 35 },
        prereq: ['perk4'],
      },
      {
        id: 'perk28',
        name: 'Elemental Potency',
        description: 'Conjured Atronachs are 50% more powerful.',
        ranks: 1,
        coords: { x: 8, y: 22 },
        prereq: ['perk27'],
      },
      {
        id: 'perk29',
        name: 'Twin Souls',
        description: 'You can have two atronachs or reanimated zombies.',
        ranks: 1,
        coords: { x: 30, y: 15 },
        prereq: ['perk28', 'perk32'],
      },
      {
        id: 'perk30',
        name: 'Dual Casting',
        description: 'Dual casting a Conjuration spell overcharges the spell, allowing it to last longer.',
        ranks: 1,
        coords: { x: 35, y: 72 },
        prereq: ['perk3'],
      },
      {
        id: 'perk31',
        name: 'Necromancy',
        description: 'Greater duration for reanimated undead.',
        ranks: 1,
        coords: { x: 24, y: 33 },
        prereq: ['perk3'],
      },
      {
        id: 'perk32',
        name: 'Dark Souls',
        description: 'Reanimated undead have 100 points more health.',
        ranks: 1,
        coords: { x: 26, y: 22 },
        prereq: ['perk31'],
      },
      {
        id: 'perk33',
        name: 'Mystic Binding',
        description: 'Bound weapons do more damage.',
        ranks: 1,
        coords: { x: 60, y: 68 },
        prereq: ['perk3'],
      },
      {
        id: 'perk34',
        name: 'Soul Stealer',
        description: 'Bound weapons cast Soul Trap on targets.',
        ranks: 1,
        coords: { x: 62, y: 38 },
        prereq: ['perk33'],
      },
      {
        id: 'perk35',
        name: 'Oblivion Binding',
        description: 'Bound weapons will banish summoned creatures and turn raised ones.',
        ranks: 1,
        coords: { x: 61, y: 30 },
        prereq: ['perk34'],
      },
    ],
  },
  {
    id: 'dest',
    name: 'Destruction',
    domain: 'Magic',
    canvasSize: 'standard',
    perks: [
      {
        id: 'perk5',
        name: 'Novice Destruction',
        description: 'Cast Novice level Destruction spells for half magicka.',
        ranks: 1,
        coords: { x: 40, y: 90 },
        prereq: null,
      },
      {
        id: 'perk12',
        name: 'Apprentice Destruction',
        description: 'Cast Apprentice level Destruction spells for half magicka.',
        ranks: 2,
        coords: { x: 70, y: 65 },
        prereq: ['perk5'],
      },
      {
        id: 'perk14',
        name: 'Adept Destruction',
        description: 'Cast Adept level Destruction spells for half magicka.',
        ranks: 2,
        coords: { x: 66, y: 45 },
        prereq: ['perk12'],
      },
      {
        id: 'perk15',
        name: 'Expert Destruction',
        description: 'Cast Expert level Destruction spells for half magicka.',
        ranks: 2,
        coords: { x: 74, y: 30 },
        prereq: ['perk14'],
      },
      {
        id: 'perk16',
        name: 'Master Destruction',
        description: 'Cast Master level Destruction spells for half magicka.',
        ranks: 2,
        coords: { x: 71, y: 10 },
        prereq: ['perk15'],
      },
      {
        id: 'perk17',
        name: 'Rune Master',
        description: 'Cast Master level Destruction spells for half magicka.',
        ranks: 2,
        coords: { x: 88, y: 55 },
        prereq: ['perk12'],
      },
      {
        id: 'perk13',
        name: 'Dual Casting',
        description: 'Dual casting a Destruction spell overcharges the effects into an even more powerful version.',
        ranks: 2,
        coords: { x: 85, y: 78 },
        prereq: ['perk5'],
      },
      {
        id: 'perk18',
        name: 'Impact',
        description: 'Most destruction spells will stagger an opponent when dual cast.',
        ranks: 2,
        coords: { x: 96, y: 65 },
        prereq: ['perk13'],
      },
      {
        id: 'perk6',
        name: 'Augmented Flames',
        description: 'Fire spells do 25% more damage.',
        ranks: 2,
        coords: { x: 8, y: 60 },
        prereq: ['perk5'],
      },
      {
        id: 'perk7',
        name: 'Intense Flames',
        description: 'Fire damage causes targets to flee if their health is low (under 20%).',
        ranks: 1,
        coords: { x: 5, y: 45 },
        prereq: ['perk6'],
      },
      {
        id: 'perk8',
        name: 'Augmented Frost',
        description: 'Frost spells do 25% more damage.',
        ranks: 2,
        coords: { x: 32, y: 55 },
        prereq: ['perk5'],
      },
      {
        id: 'perk9',
        name: 'Deep Freeze',
        description: 'Frost damage paralyzes targets if their health is low (under 20%).',
        ranks: 1,
        coords: { x: 30, y: 35 },
        prereq: ['perk8'],
      },
      {
        id: 'perk10',
        name: 'Augmented Shock',
        description: 'Shock spells do 25% more damage.',
        ranks: 2,
        coords: { x: 48, y: 55 },
        prereq: ['perk5'],
      },
      {
        id: 'perk11',
        name: 'Disintegrate',
        description: 'Shock spells disintegrate targets if their health is low (under 15%).',
        ranks: 1,
        coords: { x: 47, y: 30 },
        prereq: ['perk10'],
      },
    ],
  },
  {
    id: 'rest',
    name: 'Restoration',
    domain: 'Magic',
    canvasSize: 'large',
    perks: [
      {
        id: '000f2caa',
        name: 'Novice Restoration',
        description: 'Cast Novice level Restoration spells for half magicka.',
        ranks: 1,
        coords: { x: 55, y: 90 },
        prereq: null,
      },
      {
        id: '000c44c7',
        name: 'Apprentice Restoration',
        description: 'Cast Apprentice level Restoration spells for half magicka.',
        ranks: 1,
        coords: { x: 58, y: 70 },
        prereq: ['000f2caa'],
      },
      {
        id: '000c44c8',
        name: 'Adept Restoration',
        description: 'Cast Adept level Restoration spells for half magicka.',
        ranks: 1,
        coords: { x: 50, y: 48 },
        prereq: ['000c44c7'],
      },
      {
        id: '000c44c9',
        name: 'Expert Restoration',
        description: 'Cast Expert level Restoration spells for half magicka.',
        ranks: 1,
        coords: { x: 55, y: 25 },
        prereq: ['000c44c8'],
      },
      {
        id: '000c44ca',
        name: 'Master Restoration',
        description: 'Cast Master level Restoration spells for half magicka.',
        ranks: 1,
        coords: { x: 44, y: 15 },
        prereq: ['000c44c9'],
      },
      {
        id: '000581f9',
        name: 'Respite',
        description: 'Healing spells also restore Stamina.',
        ranks: 1,
        coords: { x: 5, y: 60 },
        prereq: ['000f2caa'],
      },
      {
        id: '000581f8',
        name: 'Regeneration',
        description: 'Healing spells cure 50% more.',
        ranks: 1,
        coords: { x: 35, y: 68 },
        prereq: ['000f2caa'],
      },
      {
        id: '000581e4',
        name: 'Necromage',
        description: 'All spells are more effective against undead.',
        ranks: 1,
        coords: { x: 10, y: 35 },
        prereq: ['000581f8'],
      },
      {
        id: '00068bcc',
        name: 'Ward Absorb',
        description: 'Wards recharge your magicka when hit with spells.',
        ranks: 1,
        coords: { x: 37, y: 38 },
        prereq: ['000f2caa'],
      },
      {
        id: '000581f4',
        name: 'Recovery',
        description: 'Magicka regenerates 25% faster.',
        ranks: 2,
        coords: { x: 87, y: 62 },
        prereq: ['000f2caa'],
      },
      {
        id: '000a3f64',
        name: 'Avoid Death',
        description: 'Once a day, heals 250 points automatically if you fall below 10% health.',
        ranks: 1,
        coords: { x: 96, y: 45 },
        prereq: ['000581f4'],
      },
      {
        id: '000153d1',
        name: 'Recovery',
        description: 'Dual casting a Restoration spell overcharges the effects into an even more powerful version.',
        ranks: 1,
        coords: { x: 78, y: 75 },
        prereq: ['000f2caa'],
      },
    ]
  },
  {
    id: 'altr',
    name: 'Alteration',
    domain: 'Magic',
    canvasSize: 'standard',
    perks: [
      {
        id: '000f2ca6',
        name: 'Novice Alteration',
        description: 'Cast Novice level Alteration spells for half magicka.',
        ranks: 1,
        coords: { x: 50, y: 90 },
        prereq: null,
      },
      {
        id: '000c44b7',
        name: 'Apprentice Alteration',
        description: 'Cast Apprentice level Alteration spells for half magicka.',
        ranks: 1,
        coords: { x: 58, y: 65 },
        prereq: ['000f2ca6'],
      },
      {
        id: '000c44b8',
        name: 'Adept Alteration',
        description: 'Cast Adept level Alteration spells for half magicka.',
        ranks: 1,
        coords: { x: 58, y: 40 },
        prereq: ['000c44b7'],
      },
      {
        id: '000c44b9',
        name: 'Expert Alteration',
        description: 'Cast Expert level Alteration spells for half magicka.',
        ranks: 1,
        coords: { x: 70, y: 30 },
        prereq: ['000c44b8'],
      },
      {
        id: '000c44ba',
        name: 'Master Alteration',
        description: 'Cast Master level Alteration spells for half magicka.',
        ranks: 1,
        coords: { x: 92, y: 18 },
        prereq: ['000c44b9'],
      },
      {
        id: '000153cd',
        name: 'Dual Casting',
        description: 'Dual casting an Alteration spell overcharges the effects into an even more powerful version.',
        ranks: 1,
        coords: { x: 34, y: 70 },
        prereq: ['000f2ca6'],
      },
      {
        id: '000d7999',
        name: 'Mage Armor',
        description: 'Protection spells like Stoneflesh are twice as strong if not wearing armor.',
        ranks: 3,
        coords: { x: 38, y: 48 },
        prereq: ['000c44b7'],
      },
      {
        id: '00053128',
        name: 'Magic Resistance',
        description: 'Blocks 10% of a spells effects.',
        ranks: 3,
        coords: { x: 80, y: 47 },
        prereq: ['000c44b7'],
      },
      {
        id: '000581fc',
        name: 'Stability',
        description: 'Alteration spells have 50% greater duration.',
        ranks: 1,
        coords: { x: 42, y: 30 },
        prereq: ['000c44b8'],
      },
      {
        id: '000581f7',
        name: 'Atronach',
        description: 'Absorb 30% of the magicka of any spells that hit you.',
        ranks: 1,
        coords: { x: 35, y: 15 },
        prereq: ['000c44b9'],
      },
    ],
  },
  {
    id: 'ench',
    name: 'Enchanting',
    domain: 'Magic',
    canvasSize: 'standard',
    perks: [
      {
        id: '000BEE97',
        name: 'Enchanter',
        description: 'New enchantments are 20% stronger.',
        ranks: 5,
        coords: { x: 40, y: 90 },
        prereq: null,
      },
      {
        id: '00058F80',
        name: 'Fire Enchanter',
        description: 'Fire enchantments on weapons and armor are 25% stronger.',
        ranks: 1,
        coords: { x: 22, y: 60 },
        prereq: ['000BEE97'],
      },
      {
        id: '00058F81',
        name: 'Frost Enchanter',
        description: 'Frost enchantments on weapons and armor are 25% stronger.',
        ranks: 1,
        coords: { x: 25, y: 42 },
        prereq: ['00058F80'],
      },
      {
        id: '00058F82',
        name: 'Storm Enchanter',
        description: 'Shock enchantments on weapons and armor are 25% stronger.',
        ranks: 1,
        coords: { x: 37, y: 28 },
        prereq: ['00058F81'],
      },
      {
        id: '00058F7F',
        name: 'Extra Effect',
        description: 'Can put two enchantments on the same item.',
        ranks: 1,
        coords: { x: 58, y: 15 },
        prereq: ['00058F82', '00058F7D'],
      },
      {
        id: '00058F7E',
        name: 'Insightful Enchanter',
        description: 'Skill enchantments on armor are 25% stronger.',
        ranks: 1,
        coords: { x: 52, y: 56 },
        prereq: ['000BEE97'],
      },
      {
        id: '00058F7D',
        name: 'Corpus Enchanter',
        description: 'Health, magicka, and stamina enchantments on armor are 25% stronger.',
        ranks: 1,
        coords: { x: 66, y: 39 },
        prereq: ['00058F7E'],
      },
      {
        id: '00058F7C',
        name: 'Soul Squeezer',
        description: 'Skill enchantments on armor are 25% stronger.',
        ranks: 1,
        coords: { x: 90, y: 55 },
        prereq: ['000BEE97'],
      },
      {
        id: '00108A44',
        name: 'Soul Siphon',
        description: 'Health, magicka, and stamina enchantments on armor are 25% stronger.',
        ranks: 1,
        coords: { x: 80, y: 25 },
        prereq: ['00058F7C'],
      },
    ],
  },
  {
    id: 'smth',
    name: 'Smithing',
    domain: 'Combat',
    canvasSize: 'large',
    perks: [
      {
        id: '000CB40D',
        name: 'Steel Smithing',
        description: 'Can create Steel armor and weapons at forges, and improve them twice as much.',
        ranks: 1,
        coords: { x: 35, y: 68 },
        prereq: null,
      },
      {
        id: '0005218E',
        name: 'Arcane Blacksmith',
        description: 'You can improve magical weapons and armor.',
        ranks: 1,
        coords: { x: 38, y: 43 },
        prereq: ['000CB40D'],
      },
      {
        id: '000CB40E',
        name: 'Dwarven Smithing',
        description: 'Can create Dwarven armor and weapons at forges, and improve them twice as much.',
        ranks: 1,
        coords: { x: 58, y: 49 },
        prereq: ['000CB40D'],
      },
      {
        id: '000CB410',
        name: 'Orcish Smithing',
        description: 'Can create Orcish armor and weapons at forges, and improve them twice as much.',
        ranks: 1,
        coords: { x: 80, y: 39 },
        prereq: ['000CB40E'],
      },
      {
        id: '000CB412',
        name: 'Ebony Smithing',
        description: 'Can create Ebony armor and weapons at forges, and improve them twice as much.',
        ranks: 1,
        coords: { x: 96, y: 39 },
        prereq: ['000CB410'],
      },
      {
        id: '000CB413',
        name: 'Daedric Smithing',
        description: 'Can create Daedric armor and weapons at forges, and improve them twice as much.',
        ranks: 1,
        coords: { x: 68, y: 30 },
        prereq: ['000CB412'],
      },
      {
        id: '000CB40F',
        name: 'Elven Smithing',
        description: 'Can create Elven armor and weapons at forges, and improve them twice as much.',
        ranks: 1,
        coords: { x: 6, y: 42 },
        prereq: ['000CB40D'],
      },
      {
        id: '000CB414',
        name: 'Advanced Armors',
        description: 'Can create Scaled and Plate armor at forges, and improve them twice as much.',
        ranks: 1,
        coords: { x: 9, y: 36 },
        prereq: ['000CB40F'],
      },
      {
        id: '000CB411',
        name: 'Glass Smithing',
        description: 'Can create Glass armor and weapons at forges, and improve them twice as much.',
        ranks: 1,
        coords: { x: 30, y: 28 },
        prereq: ['000CB414'],
      },
      {
        id: '00052190',
        name: 'Dragon Armor',
        description: 'Can create Dragon armor and Dragonbone weapons at forges, and improve them twice as much.',
        ranks: 1,
        coords: { x: 50, y: 28 },
        prereq: ['000CB411', '000CB413'],
      },
    ],
  },
];