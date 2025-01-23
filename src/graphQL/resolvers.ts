import fruitResolvers from "./resolvers/fruitResolver";
import characterResolvers from "./resolvers/characterResolver";
import { fruits, characters } from "../data/data";
import { Fruit } from "../types/fruit";
import { Character } from "../types/character";

const resolvers = {
  Query: {
    ...fruitResolvers.Query,
    ...characterResolvers.Query,
  },
  Mutation: {
    ...fruitResolvers.Mutation,
    ...characterResolvers.Mutation,
  },
  Character: {
    ...characterResolvers.Character,
    relationships: (parent: Character) => {
      if (!parent.relationships) return [];
      return parent.relationships.map((rel) => {
        const relatedCharacter = characters.find(
          (c) => c.id === rel.character.id
        );
        if (!relatedCharacter) {
          throw new Error(`Character with id ${rel.character.id} not found`);
        }
        return {
          character: relatedCharacter,
          relationshipType: rel.relationshipType,
        };
      });
    },
  },
  DevilFruit: {
    fruit: (parent: { fruit: { id: string } }) => {
      const foundFruit = fruits.find((f) => f.id === parent.fruit.id);
      if (!foundFruit) {
        throw new Error(`Fruit with id ${parent.fruit.id} not found`);
      }
      return foundFruit;
    },
  },
  Fruit: {
    id: (parent: Fruit) => parent.id,
    name: (parent: Fruit) => parent.name,
    type: (parent: Fruit) => parent.type,
    meaning: (parent: Fruit) => parent.meaning,
    properties: (parent: Fruit) => parent.properties,
  },
};

export default resolvers;
