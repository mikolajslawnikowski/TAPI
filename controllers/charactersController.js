import { characters } from "../data/data.js";

export const getAllCharacters = (req, res) => {
  try {
    if (characters.length === 0) {
      return res.status(404).json({
        message: "No characters found",
        _links: {
          self: { href: "/characters" },
        },
      });
    }

    res.status(200).json({
      data: characters,
      _links: {
        self: { href: "/characters" },
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getCharacterById = (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        message: "Invalid ID format",
        _links: {
          allCharacters: { href: "/characters" },
        },
      });
    }

    const character = characters.find((char) => char.id === id);

    if (!character) {
      return res.status(404).json({
        message: "Character not found",
        _links: {
          allCharacters: { href: "/characters" },
        },
      });
    }

    res.status(200).json({
      data: character,
      _links: {
        self: { href: `/characters/${id}` },
        allCharacters: { href: "/characters" },
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const createCharacter = (req, res) => {
  const { firstName, lastName, fullName, nickname, affiliation, occupancy, alive, bounty } = req.body;

  if (!firstName || !lastName || !fullName || !nickname || !affiliation || !occupancy || bounty === undefined) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  try {
    const newCharacter = {
      id: (characters.length + 1).toString(),
      firstName,
      lastName,
      fullName,
      nickname,
      affiliation,
      occupancy,
      alive: alive !== undefined ? alive : true,
      bounty,
      haki: [],
      abilities: [],
      devilFruits: [],
      relationships: [],
    };

    characters.push(newCharacter);

    res.status(201).json({
      message: "Character created successfully",
      data: newCharacter,
      _links: {
        self: { href: `/characters/${newCharacter.id}` },
        allCharacters: { href: "/characters" },
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const updateCharacter = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, fullName, nickname, affiliation, occupancy, alive, bounty } = req.body;

  const character = characters.find((char) => char.id === id);

  if (!character) {
    return res.status(404).json({
      message: "Character not found",
    });
  }

  if (!firstName || !lastName || !fullName || !nickname || !affiliation || !occupancy || bounty === undefined) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  try {
    Object.assign(character, {
      firstName,
      lastName,
      fullName,
      nickname,
      affiliation,
      occupancy,
      alive,
      bounty,
    });

    res.status(200).json({
      message: "Character updated successfully",
      data: character,
      _links: {
        self: { href: `/characters/${id}` },
        allCharacters: { href: "/characters" },
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteCharacter = (req, res) => {
  const { id } = req.params;
  const characterIndex = characters.findIndex((char) => char.id === id);

  if (characterIndex === -1) {
    return res.status(404).json({
      message: "Character not found",
    });
  }

  try {
    characters.splice(characterIndex, 1);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

