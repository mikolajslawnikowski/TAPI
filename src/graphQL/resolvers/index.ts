import { fruits } from "../../data/data";
import {
  StringFilterInput,
  FruitFilterInput,
  CreateFruitInput,
  UpdateFruitInput,
  Fruit,
} from "../../types/fruit";
import { GraphQLResolveInfo } from "graphql";

interface ResolverContext {
  // Add any context properties you need
}

type MutationContext = {
  _parent: never;
  _context: ResolverContext;
  _info: GraphQLResolveInfo;
};

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
    fruits: (
      _parent: never,
      { filter }: { filter?: FruitFilterInput },
      _context: ResolverContext,
      _info: GraphQLResolveInfo
    ) => {
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
    fruit: (
      _parent: never,
      { id }: { id: string },
      _context: ResolverContext,
      _info: GraphQLResolveInfo
    ) => fruits.find((fruit) => fruit.id === id),
  },

  Mutation: {
    createFruit: (
      _parent: never,
      { input }: { input: CreateFruitInput },
      _context: ResolverContext,
      _info: GraphQLResolveInfo
    ) => {
      const newFruit = {
        id: (fruits.length + 1).toString(),
        ...input,
      };
      fruits.push(newFruit);
      return newFruit;
    },

    updateFruit: (
      _parent: never,
      { id, input }: { id: string; input: UpdateFruitInput },
      _context: ResolverContext,
      _info: GraphQLResolveInfo
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

    deleteFruit: (
      _parent: never,
      { id }: { id: string },
      _context: ResolverContext,
      _info: GraphQLResolveInfo
    ) => {
      const fruitIndex = fruits.findIndex((fruit) => fruit.id === id);
      if (fruitIndex === -1) return false;

      fruits.splice(fruitIndex, 1);
      return true;
    },
  },
};

export default resolvers;
