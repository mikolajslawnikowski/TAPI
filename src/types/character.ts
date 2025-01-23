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

export interface StringFilterInput {
  eq?: string;
  contains?: string;
  ne?: string;
  notContains?: string;
}

export type SortOrder = "ASC" | "DESC";

export interface SortInput {
  field: string;
  order: SortOrder;
}

export interface PaginationInput {
  offset?: number;
  limit?: number;
}

export interface CharacterFilterInput {
  firstName?: StringFilterInput;
  lastName?: StringFilterInput;
  fullName?: StringFilterInput;
  nickname?: StringFilterInput;
  affiliation?: StringFilterInput;
  occupancy?: StringFilterInput;
  alive?: boolean;
  bountyGreaterThan?: number;
  bountyLessThan?: number;
  sort?: SortInput;
  pagination?: PaginationInput;
}
