import { arcs, characters } from "../../data/data";
import { Arc, ArcCharacter } from "../../types/arc";
import {
  StringFilterInput,
  SortInput,
  PaginationInput,
  CharacterReference,
} from "../../types/character";
import { GraphQLResolveInfo } from "graphql";

interface CreateArcInput {
  name: string;
  firstChapter: number;
  lastChapter: number;
  characters: { characterId: string; role: string }[];
  plot: string;
}

interface UpdateArcInput extends Partial<CreateArcInput> {}

interface ArcFilterInput {
  name?: StringFilterInput;
  firstChapterGreaterThan?: number;
  firstChapterLessThan?: number;
  lastChapterGreaterThan?: number;
  lastChapterLessThan?: number;
  sort?: SortInput;
  pagination?: PaginationInput;
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

const resolvers = {
  Query: {
    arcs: (
      _parent: null,
      { filter }: { filter?: ArcFilterInput },
      _info: GraphQLResolveInfo
    ): Arc[] => {
      let result = arcs;

      if (filter) {
        result = arcs.filter((arc) => {
          if (filter.name && !filterString(arc.name, filter.name)) return false;
          if (
            filter.firstChapterGreaterThan !== undefined &&
            arc.firstChapter <= filter.firstChapterGreaterThan
          )
            return false;
          if (
            filter.firstChapterLessThan !== undefined &&
            arc.firstChapter >= filter.firstChapterLessThan
          )
            return false;
          if (
            filter.lastChapterGreaterThan !== undefined &&
            arc.lastChapter <= filter.lastChapterGreaterThan
          )
            return false;
          if (
            filter.lastChapterLessThan !== undefined &&
            arc.lastChapter >= filter.lastChapterLessThan
          )
            return false;
          return true;
        });

        if (filter.sort) {
          result = [...result].sort((a, b) => {
            const aValue = (a as any)[filter.sort!.field];
            const bValue = (b as any)[filter.sort!.field];
            const multiplier = filter.sort!.order === "ASC" ? 1 : -1;
            return aValue > bValue ? multiplier : -multiplier;
          });
        }

        if (filter.pagination) {
          const offset = filter.pagination.offset || 0;
          const limit = filter.pagination.limit || result.length;
          result = result.slice(offset, offset + limit);
        }
      }

      return result;
    },

    arc: (
      _parent: null,
      { id }: { id: string },
      _info: GraphQLResolveInfo
    ): Arc | null => arcs.find((arc) => arc.id === id) || null,
  },

  Mutation: {
    createArc: (
      _parent: null,
      { input }: { input: CreateArcInput },
      _info: GraphQLResolveInfo
    ): Arc => {
      const newArc: Arc = {
        id: (arcs.length + 1).toString(),
        name: input.name,
        firstChapter: input.firstChapter,
        lastChapter: input.lastChapter,
        characters: input.characters.map((char) => ({
          character: {
            id: char.characterId,
            type: "CHARACTER",
          } as CharacterReference,
          role: char.role,
        })),
        plot: input.plot,
      };

      arcs.push(newArc);
      return newArc;
    },

    updateArc: (
      _parent: null,
      { id, input }: { id: string; input: UpdateArcInput },
      _info: GraphQLResolveInfo
    ): Arc => {
      const arcIndex = arcs.findIndex((arc) => arc.id === id);
      if (arcIndex === -1) throw new Error("Arc not found");

      const existingArc = arcs[arcIndex];
      const updatedArc: Arc = {
        ...existingArc,
        ...input,
        characters: input.characters
          ? input.characters.map((char) => ({
              character: {
                id: char.characterId,
                type: "CHARACTER",
              } as CharacterReference,
              role: char.role,
            }))
          : existingArc.characters,
      };

      arcs[arcIndex] = updatedArc;
      return updatedArc;
    },

    deleteArc: (
      _parent: null,
      { id }: { id: string },
      _info: GraphQLResolveInfo
    ): boolean => {
      const arcIndex = arcs.findIndex((arc) => arc.id === id);
      if (arcIndex === -1) return false;

      arcs.splice(arcIndex, 1);
      return true;
    },
  },

  Arc: {
    characters: (parent: Arc): ArcCharacter[] => {
      return parent.characters.map((char) => {
        const foundCharacter = characters.find(
          (c) => c.id === char.character.id
        );
        if (!foundCharacter) {
          throw new Error(`Character with id ${char.character.id} not found`);
        }
        return {
          character: {
            ...foundCharacter,
            type: "CHARACTER",
          } as CharacterReference,
          role: char.role,
        };
      });
    },
  },
};

export default resolvers;
