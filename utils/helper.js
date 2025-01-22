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
