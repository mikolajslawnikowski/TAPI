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
