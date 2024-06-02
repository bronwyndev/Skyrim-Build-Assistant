export interface Perk {
    id: string;
    name: string;
    description: string;
    ranks: number;
    coords: { x: number, y: number };
    prereq: string[] | null;
  }
  
  export interface PerkTree {
    id: string;
    name: string;
    domain: string;
    canvasSize: string;
    perks: Perk[];
  }