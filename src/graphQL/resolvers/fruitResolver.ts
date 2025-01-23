import { fruits } from "../../data/data";
import {
  StringFilterInput,
  FruitFilterInput,
  CreateFruitInput,
  UpdateFruitInput,
  SortInput,
  PaginationInput,
  Fruit,
} from "../../types/fruit";
import { GraphQLResolveInfo } from "graphql";

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

const applySorting = (fruits: Fruit[], sort?: SortInput): Fruit[] => {
  if (!sort) return fruits;

  return [...fruits].sort((a, b) => {
    const aValue = a[sort.field as keyof Fruit];
    const bValue = b[sort.field as keyof Fruit];
    const multiplier = sort.order === "ASC" ? 1 : -1;

    if (typeof aValue === "string" && typeof bValue === "string") {
      return aValue.localeCompare(bValue) * multiplier;
    }
    return 0;
  });
};

const applyPagination = (
  fruits: Fruit[],
  pagination?: PaginationInput
): Fruit[] => {
  if (!pagination) return fruits;

  const offset = pagination.offset || 0;
  const limit = pagination.limit || fruits.length;

  return fruits.slice(offset, offset + limit);
};

const fruitResolvers = {
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
      _parent: null,
      { filter }: { filter?: FruitFilterInput },
      _info: GraphQLResolveInfo
    ): Fruit[] => {
      let result = fruits;

      if (filter) {
        result = fruits.filter((fruit) => {
          if (filter.name && !filterString(fruit.name, filter.name))
            return false;
          if (filter.type && !filterString(fruit.type, filter.type))
            return false;
          if (filter.meaning && !filterString(fruit.meaning, filter.meaning))
            return false;
          if (
            filter.properties &&
            !filterString(fruit.properties, filter.properties)
          )
            return false;
          return true;
        });

        result = applySorting(result, filter.sort);
        result = applyPagination(result, filter.pagination);
      }

      return result;
    },
    fruit: (
      _parent: null,
      { id }: { id: string },
      _info: GraphQLResolveInfo
    ): Fruit | null => fruits.find((fruit) => fruit.id === id) || null,
  },

  Mutation: {
    createFruit: (
      _parent: null,
      { input }: { input: CreateFruitInput },
      _info: GraphQLResolveInfo
    ): Fruit => {
      const newFruit = {
        id: (fruits.length + 1).toString(),
        ...input,
      };
      fruits.push(newFruit);
      return newFruit;
    },

    updateFruit: (
      _parent: null,
      { id, input }: { id: string; input: UpdateFruitInput },
      _info: GraphQLResolveInfo
    ): Fruit => {
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
      _parent: null,
      { id }: { id: string },
      _info: GraphQLResolveInfo
    ): boolean => {
      const fruitIndex = fruits.findIndex((fruit) => fruit.id === id);
      if (fruitIndex === -1) return false;

      fruits.splice(fruitIndex, 1);
      return true;
    },
  },
};

export default fruitResolvers;
