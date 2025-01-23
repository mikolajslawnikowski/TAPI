import { RequestHandler } from "express";
import { characters } from "../data/data";
import { transformCharacterData, transformCharacters } from "../utils/helper";
import {
  Character,
  CharacterRequest,
  CharacterParams,
} from "../types/character";
import { ApiResponse } from "../types/responses";
import { APIError } from "../types/error";

export const getAllCharacters: RequestHandler = (_req, res) => {
  try {
    if (characters.length === 0) {
      res.status(404).json({
        message: "No characters found",
        _links: { self: { href: "/characters" } },
      });
      return;
    }

    const transformedData = transformCharacters(characters);
    res.status(200).json({ data: transformedData });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    res.status(500).json({ message: errorMessage });
  }
};

export const getCharacterById: RequestHandler<{ id: string }> = (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      res.status(400).json({
        message: "Invalid ID format",
        _links: { self: { href: "/characters" } },
      });
      return;
    }

    const character = characters.find((char) => char.id === id);

    if (!character) {
      res.status(404).json({
        message: "Character not found",
        _links: { characters: { href: "/characters" } },
      });
      return;
    }

    res.status(200).json({ data: transformCharacterData(character) });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    res.status(500).json({ message: errorMessage });
  }
};

export const createCharacter: RequestHandler<
  {},
  ApiResponse<Character>,
  Character
> = (req, res) => {
  const { body } = req;

  if (!isValidCharacterData(body)) {
    res.status(400).json({
      message: "All fields are required",
      requiredFields: {
        firstName: "string",
        lastName: "string",
        fullName: "string",
        nickname: "string",
        affiliation: "string",
        occupancy: "string",
        alive: "boolean",
        bounty: "number",
        haki: "array",
        abilities: "array",
        devilFruits: "array",
        relationships: "array",
      },
    });
    return;
  }

  try {
    const newCharacter: Character = {
      ...body,
      id: (characters.length + 1).toString(),
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
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    res.status(500).json({ message: errorMessage });
  }
};

export const updateCharacter: RequestHandler<
  CharacterParams["params"],
  ApiResponse<Character>,
  Partial<Character>
> = (req, res) => {
  try {
    const { id } = req.params;
    const character = characters.find((char) => char.id === id);

    if (!character) {
      res.status(404).json({ message: "Character not found" });
      return;
    }

    Object.assign(character, req.body);

    res.status(200).json({
      message: "Character updated successfully",
      data: character,
      _links: {
        self: { href: `/characters/${id}` },
        allCharacters: { href: "/characters" },
      },
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    res.status(500).json({ message: errorMessage });
  }
};

export const deleteCharacter: RequestHandler<{ id: string }> = (req, res) => {
  try {
    const { id } = req.params;
    const characterIndex = characters.findIndex((char) => char.id === id);

    if (characterIndex === -1) {
      res.status(404).json({ message: "Character not found" });
      return;
    }

    characters.splice(characterIndex, 1);
    res.status(204).send();
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    res.status(500).json({ message: errorMessage });
  }
};

function isValidCharacterData(data: Partial<Character>): data is Character {
  return Boolean(
    data.firstName &&
      data.lastName &&
      data.fullName &&
      data.nickname &&
      data.affiliation &&
      data.occupancy &&
      data.alive !== undefined &&
      data.bounty !== undefined &&
      Array.isArray(data.haki) &&
      Array.isArray(data.abilities) &&
      Array.isArray(data.devilFruits) &&
      Array.isArray(data.relationships)
  );
}
