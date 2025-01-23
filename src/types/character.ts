import { Request } from "express";
import { FruitReference } from "./fruit";

export interface CharacterReference {
  id: string;
  type: "CHARACTER";
}

export interface Haki {
  type: string;
  description: string;
}

export interface Ability {
  name: string;
  description: string;
}

export interface DevilFruit {
  fruit: FruitReference;
}

export interface Relationship {
  character: CharacterReference;
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
