export interface Fruit {
  id: string;
  name: string;
  type: string;
  meaning: string;
  properties: string;
}

export interface FruitReference {
  id: string;
  type: "FRUIT";
}

export interface FruitParams {
  id: string;
}

export interface StringFilterInput {
  eq?: string;
  contains?: string;
  ne?: string;
  notContains?: string;
}

export type SortOrder = "ASC" | "DESC";

export interface SortInput {
  field: keyof Fruit;
  order: SortOrder;
}

export interface PaginationInput {
  offset?: number;
  limit?: number;
}

export interface FruitFilterInput {
  name?: StringFilterInput;
  type?: StringFilterInput;
  meaning?: StringFilterInput;
  properties?: StringFilterInput;
  sort?: SortInput;
  pagination?: PaginationInput;
}

export interface CreateFruitInput {
  name: string;
  type: string;
  meaning: string;
  properties: string;
}

export interface UpdateFruitInput {
  name?: string;
  type?: string;
  meaning?: string;
  properties?: string;
}
