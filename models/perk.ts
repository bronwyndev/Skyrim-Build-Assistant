export interface Perk {
    id: string;
    name: string;
    description: string;
    levels: number;
    coords: { x: number, y: number };
    prereq: string | null;
  }
  
  export interface PerkTree {
    id: string;
    name: string;
    domain: string;
    perks: Perk[];
  }