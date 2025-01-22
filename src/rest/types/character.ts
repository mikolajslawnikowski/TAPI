import { Request } from "express";

export interface Haki {
  type: string;
  description: string;
}

export interface Ability {
  name: string;
  description: string;
}

export interface DevilFruit {
  fruit: {
    id: string;
    type: string;
  };
}

export interface Relationship {
  character: {
    id: string;
  };
  relationshipType: string;
}

export interface Character {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  nickname: string;
  affiliation: string;
  occupancy: string;
  alive: boolean;
  bounty: number | null;
  haki: Haki[];
  abilities: Ability[];
  devilFruits: DevilFruit[];
  relationships: Relationship[];
}

export interface CharacterRequest extends Request {
  body: Partial<Character>;
}

export interface CharacterParams {
  params: {
    id: string;
  };
}
