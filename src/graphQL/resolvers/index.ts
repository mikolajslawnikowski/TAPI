import { fruits } from "../../data/data";
import {
  StringFilterInput,
  FruitFilterInput,
  CreateFruitInput,
  UpdateFruitInput,
} from "../../types/fruit";

const filterString = (value: string, filter?: StringFilterInput): boolean => {
  if (!filter) return true;

  if (filter.eq !== undefined && value !== filter.eq) return false;
  if (filter.ne !== undefined && value === filter.ne) return false;
  if (filter.contains !== undefined && !value.includes(filter.contains))
    return false;
  if (filter.notContains !== undefined && value.includes(filter.notContains))
    return false;

  return true;
};

const resolvers = {
  Date: {
    __parseValue(value: string) {
      return new Date(value);
    },
    __serialize(value: Date) {
      return value.toISOString();
    },
  },

  Query: {
    fruits: (_: any, { filter }: { filter?: FruitFilterInput }) => {
      if (!filter) return fruits;

      return fruits.filter((fruit) => {
        if (filter.name && !filterString(fruit.name, filter.name)) return false;
        if (filter.type && !filterString(fruit.type, filter.type)) return false;
        if (filter.meaning && !filterString(fruit.meaning, filter.meaning))
          return false;
        if (
          filter.properties &&
          !filterString(fruit.properties, filter.properties)
        )
          return false;
        return true;
      });
    },
    fruit: (_: any, { id }: { id: string }) =>
      fruits.find((fruit) => fruit.id === id),
  },

  Mutation: {
    createFruit: (_: any, { input }: { input: CreateFruitInput }) => {
      const newFruit = {
        id: (fruits.length + 1).toString(),
        ...input,
      };
      fruits.push(newFruit);
      return newFruit;
    },

    updateFruit: (
      _: any,
      { id, input }: { id: string; input: UpdateFruitInput }
    ) => {
      const fruitIndex = fruits.findIndex((fruit) => fruit.id === id);
      if (fruitIndex === -1) throw new Error("Fruit not found");

      const updatedFruit = {
        ...fruits[fruitIndex],
        ...input,
      };
      fruits[fruitIndex] = updatedFruit;
      return updatedFruit;
    },

    deleteFruit: (_: any, { id }: { id: string }) => {
      const fruitIndex = fruits.findIndex((fruit) => fruit.id === id);
      if (fruitIndex === -1) return false;

      fruits.splice(fruitIndex, 1);
      return true;
    },
  },
};

export default resolvers;
