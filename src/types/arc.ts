import { Request } from "express";
import { CharacterReference } from "./character";
import { TransformedResource } from "./links";

export interface ArcCharacter {
  character: CharacterReference;
  role: string;
}

export interface Arc {
  id: string;
  name: string;
  firstChapter: number;
  lastChapter: number;
  characters: ArcCharacter[];
  plot: string;
  [key: string]: string | number | ArcCharacter[] | unknown;
}

export interface ArcRequest extends Request {
  body: Partial<Arc>;
}

export interface ArcParams extends Request {
  params: {
    id: string;
  };
}

export interface TransformedArc extends Arc, TransformedResource {}
