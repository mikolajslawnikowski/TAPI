import { fruits, characters } from "../data/data.js";

export const transformCharacterData = (character) => {
  const transformedCharacter = { ...character };

  transformedCharacter.devilFruits = character.devilFruits.map((df) => {
    const foundFruit = fruits.find((f) => f.id === df.fruit.id);
    const fruit = foundFruit || df.fruit;
    return {
      ...fruit,
      _links: {
        self: { href: `/fruits/${fruit.id}` },
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
        ...fruit,
        _links: {
          self: { href: `/fruits/${fruit.id}` },
        },
      };
    });

    return {
      ...rel,
      character: {
        id: relatedCharacter.id,
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

export const transformCharacters = (characters) => {
  return characters.map(transformCharacterData);
};

export const transformArcData = (arc) => {
  const transformedArc = { ...arc };

  transformedArc.characters = arc.characters.map((char) => {
    const relatedCharacter = characters.find((c) => c.id === char.character.id);
    if (!relatedCharacter) return char;

    const relatedDevilFruits = relatedCharacter.devilFruits.map((df) => {
      const foundFruit = fruits.find((f) => f.id === df.fruit.id);
      const fruit = foundFruit || df.fruit;
      return {
        ...fruit,
        _links: {
          self: { href: `/fruits/${fruit.id}` },
        },
      };
    });

    return {
      ...char,
      character: {
        id: relatedCharacter.id,
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

export const transformArcs = (arcs) => {
  return arcs.map(transformArcData);
};

export const transformFruit = (fruit) => {
  return {
    ...fruit,
    _links: {
      fruits: { href: "/fruits" },
      self: { href: `/fruits/${fruit.id}` },
    },
  };
};

export const transformFruits = (fruits) => {
  return fruits.map(transformFruit);
};
