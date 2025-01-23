import { characters, fruits } from "../../data/data";
import {
  Character,
  CharacterFilterInput,
  DevilFruit,
  Relationship,
  CharacterReference,
  Haki,
  Ability,
  StringFilterInput,
  SortInput,
  PaginationInput,
} from "../../types/character";
import { FruitReference } from "../../types/fruit";
import { GraphQLResolveInfo } from "graphql";

interface CreateCharacterMutationInput {
  firstName: string;
  lastName: string;
  fullName: string;
  nickname: string;
  affiliation: string;
  occupancy: string;
  alive: boolean;
  bounty?: number;
  haki: Haki[];
  abilities: Ability[];
  devilFruits: { fruitId: string }[];
  relationships: { characterId: string; relationshipType: string }[];
}

interface UpdateCharacterMutationInput {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  nickname?: string;
  affiliation?: string;
  occupancy?: string;
  alive?: boolean;
  bounty?: number;
  haki?: Haki[];
  abilities?: Ability[];
  devilFruits?: { fruitId: string }[];
  relationships?: { characterId: string; relationshipType: string }[];
}

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

const applySorting = (
  characters: Character[],
  sort?: SortInput
): Character[] => {
  if (!sort) return characters;

  return [...characters].sort((a, b) => {
    const aValue = (a as any)[sort.field];
    const bValue = (b as any)[sort.field];
    const multiplier = sort.order === "ASC" ? 1 : -1;

    if (typeof aValue === "string" && typeof bValue === "string") {
      return aValue.localeCompare(bValue) * multiplier;
    }
    if (typeof aValue === "number" && typeof bValue === "number") {
      return (aValue - bValue) * multiplier;
    }
    if (typeof aValue === "boolean" && typeof bValue === "boolean") {
      return (aValue === bValue ? 0 : aValue ? 1 : -1) * multiplier;
    }
    return 0;
  });
};

const applyPagination = (
  characters: Character[],
  pagination?: PaginationInput
): Character[] => {
  if (!pagination) return characters;

  const offset = pagination.offset || 0;
  const limit = pagination.limit || characters.length;

  return characters.slice(offset, offset + limit);
};

const resolvers = {
  Query: {
    characters: (
      _parent: null,
      { filter }: { filter?: CharacterFilterInput },
      _info: GraphQLResolveInfo
    ): Character[] => {
      let result = characters;

      if (filter) {
        result = characters.filter((character) => {
          if (
            filter.firstName &&
            !filterString(character.firstName, filter.firstName)
          )
            return false;
          if (
            filter.lastName &&
            !filterString(character.lastName, filter.lastName)
          )
            return false;
          if (
            filter.fullName &&
            !filterString(character.fullName, filter.fullName)
          )
            return false;
          if (
            filter.nickname &&
            !filterString(character.nickname, filter.nickname)
          )
            return false;
          if (
            filter.affiliation &&
            !filterString(character.affiliation, filter.affiliation)
          )
            return false;
          if (
            filter.occupancy &&
            !filterString(character.occupancy, filter.occupancy)
          )
            return false;
          if (filter.alive !== undefined && character.alive !== filter.alive)
            return false;
          if (
            filter.bountyGreaterThan !== undefined &&
            (character.bounty === null ||
              character.bounty <= filter.bountyGreaterThan)
          )
            return false;
          if (
            filter.bountyLessThan !== undefined &&
            (character.bounty === null ||
              character.bounty >= filter.bountyLessThan)
          )
            return false;
          return true;
        });

        result = applySorting(result, filter.sort);
        result = applyPagination(result, filter.pagination);
      }

      return result;
    },
    character: (
      _parent: null,
      { id }: { id: string },
      _info: GraphQLResolveInfo
    ): Character | null =>
      characters.find((character) => character.id === id) || null,
  },

  Mutation: {
    createCharacter: (
      _parent: null,
      { input }: { input: CreateCharacterMutationInput },
      _info: GraphQLResolveInfo
    ): Character => {
      const newCharacter: Character = {
        id: (characters.length + 1).toString(),
        firstName: input.firstName,
        lastName: input.lastName,
        fullName: input.fullName,
        nickname: input.nickname,
        affiliation: input.affiliation,
        occupancy: input.occupancy,
        alive: input.alive,
        bounty: input.bounty || null,
        haki: input.haki,
        abilities: input.abilities,
        devilFruits: input.devilFruits.map((df) => ({
          fruit: { id: df.fruitId, type: "FRUIT" } as FruitReference,
        })),
        relationships: input.relationships.map((rel) => ({
          character: {
            id: rel.characterId,
            type: "CHARACTER",
          } as CharacterReference,
          relationshipType: rel.relationshipType,
        })),
      };

      characters.push(newCharacter);
      return newCharacter;
    },

    updateCharacter: (
      _parent: null,
      { id, input }: { id: string; input: UpdateCharacterMutationInput },
      _info: GraphQLResolveInfo
    ): Character => {
      const characterIndex = characters.findIndex((char) => char.id === id);
      if (characterIndex === -1) throw new Error("Character not found");

      const existingCharacter = characters[characterIndex];
      const updatedCharacter: Character = {
        ...existingCharacter,
        ...input,
        devilFruits: input.devilFruits
          ? input.devilFruits.map((df) => ({
              fruit: { id: df.fruitId, type: "FRUIT" } as FruitReference,
            }))
          : existingCharacter.devilFruits,
        relationships: input.relationships
          ? input.relationships.map((rel) => ({
              character: {
                id: rel.characterId,
                type: "CHARACTER",
              } as CharacterReference,
              relationshipType: rel.relationshipType,
            }))
          : existingCharacter.relationships,
      };

      characters[characterIndex] = updatedCharacter;
      return updatedCharacter;
    },

    deleteCharacter: (
      _parent: null,
      { id }: { id: string },
      _info: GraphQLResolveInfo
    ): boolean => {
      const characterIndex = characters.findIndex((char) => char.id === id);
      if (characterIndex === -1) return false;

      characters.splice(characterIndex, 1);
      return true;
    },
  },

  Character: {
    devilFruits: (parent: Character): DevilFruit[] => {
      if (!parent.devilFruits) return [];
      return parent.devilFruits.map((df) => {
        const foundFruit = fruits.find((f) => f.id === df.fruit.id);
        if (!foundFruit) {
          throw new Error(`Fruit with id ${df.fruit.id} not found`);
        }
        return {
          fruit: {
            id: foundFruit.id,
            type: "FRUIT",
          } as FruitReference,
        };
      });
    },
    relationships: (parent: Character): Relationship[] => {
      if (!parent.relationships) return [];
      return parent.relationships.map((rel) => {
        const foundCharacter = characters.find(
          (c) => c.id === rel.character.id
        );
        if (!foundCharacter) {
          throw new Error(`Character with id ${rel.character.id} not found`);
        }
        return {
          character: {
            id: foundCharacter.id,
            type: "CHARACTER",
          } as CharacterReference,
          relationshipType: rel.relationshipType,
        };
      });
    },
  },
};

export default resolvers;
