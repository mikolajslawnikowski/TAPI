import { fruits, characters } from "../data/data";
import { Character } from "../types/character";
import { Fruit } from "../types/fruit";
import { Arc } from "../types/arc";
import { TransformedResource } from "../types/links";

export const transformCharacterData = (
  character: Character
): Character & TransformedResource => {
  const transformedCharacter = { ...character };

  transformedCharacter.devilFruits = character.devilFruits.map((df) => {
    const foundFruit = fruits.find((f) => f.id === df.fruit.id);
    const fruit = foundFruit || df.fruit;
    return {
      fruit: {
        ...fruit,
        type: "FRUIT" as const,
        _links: {
          self: { href: `/fruits/${fruit.id}` },
        },
      },
    };
  });

  transformedCharacter.relationships = character.relationships.map((rel) => {
    const relatedCharacter = characters.find((c) => c.id === rel.character.id);
    if (!relatedCharacter) return rel;

    const relatedDevilFruits = relatedCharacter.devilFruits.map((df) => {
      const foundFruit = fruits.find((f) => f.id === df.fruit.id);
      const fruit = foundFruit || df.fruit;
      return {
        fruit: {
          ...fruit,
          type: "FRUIT" as const,
          _links: {
            self: { href: `/fruits/${fruit.id}` },
          },
        },
      };
    });

    return {
      ...rel,
      character: {
        id: relatedCharacter.id,
        type: "CHARACTER" as const,
        firstName: relatedCharacter.firstName,
        lastName: relatedCharacter.lastName,
        fullName: relatedCharacter.fullName,
        nickname: relatedCharacter.nickname,
        devilFruits: relatedDevilFruits,
        _links: {
          self: { href: `/characters/${relatedCharacter.id}` },
        },
      },
    };
  });

  return {
    ...transformedCharacter,
    _links: {
      characters: { href: "/characters" },
      self: { href: `/characters/${character.id}` },
    },
  };
};

export const transformCharacters = (
  characters: Character[]
): (Character & TransformedResource)[] => {
  return characters.map(transformCharacterData);
};

export const transformArcData = (arc: Arc): Arc & TransformedResource => {
  const transformedArc = { ...arc };

  transformedArc.characters = arc.characters.map((char) => {
    const relatedCharacter = characters.find((c) => c.id === char.character.id);
    if (!relatedCharacter) return char;

    const relatedDevilFruits = relatedCharacter.devilFruits.map((df) => {
      const foundFruit = fruits.find((f) => f.id === df.fruit.id);
      const fruit = foundFruit || df.fruit;
      return {
        ...fruit,
        type: "FRUIT" as const,
        _links: {
          self: { href: `/fruits/${fruit.id}` },
        },
      };
    });

    return {
      ...char,
      character: {
        id: relatedCharacter.id,
        type: "CHARACTER" as const,
        firstName: relatedCharacter.firstName,
        lastName: relatedCharacter.lastName,
        fullName: relatedCharacter.fullName,
        nickname: relatedCharacter.nickname,
        devilFruits: relatedDevilFruits,
        _links: {
          self: { href: `/characters/${relatedCharacter.id}` },
        },
      },
    };
  });

  return {
    ...transformedArc,
    _links: {
      arcs: { href: "/arcs" },
      self: { href: `/arcs/${arc.id}` },
    },
  };
};

export const transformArcs = (arcs: Arc[]): (Arc & TransformedResource)[] => {
  return arcs.map(transformArcData);
};

export const transformFruit = (fruit: Fruit): Fruit & TransformedResource => {
  return {
    ...fruit,
    _links: {
      fruits: { href: "/fruits" },
      self: { href: `/fruits/${fruit.id}` },
    },
  };
};

export const transformFruits = (
  fruits: Fruit[]
): (Fruit & TransformedResource)[] => {
  return fruits.map(transformFruit);
};
