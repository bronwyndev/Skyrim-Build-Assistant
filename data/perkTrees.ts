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
  {
    id: 'hvar',
    name: 'Heavy Armour',
    domain: 'Combat',
    canvasSize: 'large',
    perks: [
      {
        id: '000BCD2A',
        name: 'Juggernaut',
        description: 'Increases armor rating for Heavy Armor by 20%.',
        ranks: 5,
        coords: { x: 50, y: 90 },
        prereq: null,
      },
      {
        id: '00058F6E',
        name: 'Fists of Steel',
        description: 'Unarmed attacks with Heavy Armor gauntlets do their armor rating in extra damage.',
        ranks: 1,
        coords: { x: 30, y: 70 },
        prereq: ['000BCD2A'],
      },
      {
        id: '000BCD2B',
        name: 'Cushioned',
        description: 'Half damage from falling if wearing all Heavy Armor: head, chest, hands, feet.',
        ranks: 1,
        coords: { x: 20, y: 50 },
        prereq: ['00058F6E'],
      },
      {
        id: '00058F6D',
        name: 'Conditioning',
        description: 'Heavy Armor weighs nothing and doesn\'t slow you down when worn.',
        ranks: 1,
        coords: { x: 22, y: 28 },
        prereq: ['000BCD2B'],
      },
      {
        id: '00058F6F',
        name: 'Well Fitted',
        description: '25% Armor bonus if wearing all Heavy Armor: head, chest, hands, feet.',
        ranks: 1,
        coords: { x: 70, y: 69 },
        prereq: ['000BCD2A'],
      },
      {
        id: '00058F6C',
        name: 'Tower of Strength',
        description: '50% less stagger when wearing only Heavy Armor.',
        ranks: 1,
        coords: { x: 78, y: 47 },
        prereq: ['00058F6F'],
      },
      {
        id: '00107832',
        name: 'Matching Set',
        description: 'Additional 25% Armor bonus if wearing a matched set[3] of Heavy Armor.',
        ranks: 1,
        coords: { x: 84, y: 35 },
        prereq: ['00058F6C'],
      },
      {
        id: '00105F33',
        name: 'Reflect Blows',
        description: '10% chance to reflect melee damage back to the enemy while wearing all Heavy Armor: head, chest, hands, feet.',
        ranks: 1,
        coords: { x: 79, y: 10 },
        prereq: ['00107832'],
      },
    ],
  },
  {
    id: 'bloc',
    name: 'Block',
    domain: 'Combat',
    canvasSize: 'large',
    perks: [
      {
        id: '000BCCAE',
        name: 'Shield Wall',
        description: 'Blocking is 20% more effective.',
        ranks: 5,
        coords: { x: 52, y: 90 },
        prereq: null,
      },
      {
        id: '00058F68',
        name: 'Deflect Arrows',
        description: 'Arrows that hit the shield do no damage.',
        ranks: 1,
        coords: { x: 8, y: 70 },
        prereq: ['000BCCAE'],
      },
      {
        id: '00058F69',
        name: 'Elemental Protection',
        description: 'Blocking with a shield reduces incoming fire, frost, and shock damage by 50%.',
        ranks: 1,
        coords: { x: 22, y: 30 },
        prereq: ['00058F68'],
      },
      {
        id: '00106253',
        name: 'Block Runner',
        description: 'Able to move faster with a shield or weapon raised.',
        ranks: 1,
        coords: { x: 35, y: 20 },
        prereq: ['00058F69'],
      },
      {
        id: '00058F67',
        name: 'Power Bash',
        description: 'Able to do a power bash.',
        ranks: 1,
        coords: { x: 92, y: 68 },
        prereq: ['000BCCAE'],
      },
      {
        id: '0005F594',
        name: 'Deadly Bash',
        description: 'Bashing does five times more damage.',
        ranks: 1,
        coords: { x: 90, y: 40 },
        prereq: ['00058F67'],
      },
      {
        id: '00058F66',
        name: 'Disarming Bash',
        description: 'Chance to disarm when power bashing.',
        ranks: 1,
        coords: { x: 80, y: 20 },
        prereq: ['0005F594'],
      },
      {
        id: '00058F6A',
        name: 'Shield Charge',
        description: 'Sprinting with a shield raised knocks down most targets.',
        ranks: 1,
        coords: { x: 52, y: 15 },
        prereq: ['00058F66', '00106253'],
      },
      {
        id: '000D8C33',
        name: 'Quick Reflexes',
        description: 'Time slows down if you are blocking during an enemy\'s power attack.',
        ranks: 1,
        coords: { x: 44, y: 60 },
        prereq: ['000BCCAE'],
      },
    ],
  },
  {
    id: 'twhd',
    name: 'Two-Handed',
    domain: 'Combat',
    canvasSize: 'standard',
    perks: [
      {
        id: '000BABE8',
        name: 'Barbarian',
        description: 'Two-Handed weapons do 20% more damage.',
        ranks: 5,
        coords: { x: 50, y: 90 },
        prereq: null,
      },
      {
        id: '000C5C05',
        name: 'Limbsplitter',
        description: 'Attacks with battle axes cause extra bleeding damage.',
        ranks: 3,
        coords: { x: 25, y: 60 },
        prereq: ['000BABE8'],
      },
      {
        id: '0003AF83',
        name: 'Deep Wounds',
        description: 'Attacks with greatswords have a 10% chance of doing critical damage.',
        ranks: 3,
        coords: { x: 75, y: 58 },
        prereq: ['000BABE8'],
      },
      {
        id: '0003AF84',
        name: 'Skullcrusher',
        description: 'Attacks with warhammers ignore 25% of armor.',
        ranks: 3,
        coords: { x: 90, y: 55 },
        prereq: ['000BABE8'],
      },
      {
        id: '00052D51',
        name: 'Champion\'s Stance',
        description: 'Power attacks with two-handed weapons cost 25% less stamina.',
        ranks: 1,
        coords: { x: 50, y: 70 },
        prereq: ['000BABE8'],
      },
      {
        id: '00052D52',
        name: 'Devastating Blow',
        description: 'Standing power attacks do 25% bonus damage with a chance to decapitate your enemies.',
        ranks: 1,
        coords: { x: 41, y: 46 },
        prereq: ['00052D51'],
      },
      {
        id: '000CB407',
        name: 'Great Critical Charge',
        description: 'Can do a two-handed power attack while sprinting that does double critical damage.',
        ranks: 1,
        coords: { x: 58, y: 45 },
        prereq: ['00052D51'],
      },
      {
        id: '0003AF9E',
        name: 'Sweep',
        description: 'Sideways power attacks with two-handed weapons hit all targets in front of you.',
        ranks: 1,
        coords: { x: 50, y: 25 },
        prereq: ['00052D52', '000CB407'],
      },
      {
        id: '0003AFA7',
        name: 'Warmaster',
        description: 'Backwards power attack has a 25% chance to paralyze the target.',
        ranks: 1,
        coords: { x: 50, y: 8 },
        prereq: ['0003AF9E'],
      },
    ],
  },
];