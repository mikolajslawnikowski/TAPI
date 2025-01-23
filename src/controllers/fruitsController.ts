import { RequestHandler } from "express";
import { fruits } from "../data/data";
import { transformFruit, transformFruits } from "../utils/helper";
import {
  Fruit,
  FruitParams,
  CreateFruitInput,
  UpdateFruitInput,
} from "../types/fruit";
import { ApiResponse } from "../types/responses";
import { APIError } from "../types/error";

export const getAllFruits: RequestHandler = (req, res) => {
  try {
    const transformedFruits = transformFruits(fruits);
    res.json(transformedFruits);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
};

export const getFruitById: RequestHandler<FruitParams> = (req, res) => {
  try {
    const { id } = req.params;
    const fruit = fruits.find((f) => f.id === id);

    if (!fruit) {
      res.status(404).json({ message: "Fruit not found" });
      return;
    }

    const transformedFruit = transformFruit(fruit);
    res.json(transformedFruit);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
};

export const createFruit: RequestHandler<
  {},
  ApiResponse<Fruit>,
  CreateFruitInput
> = (req, res) => {
  try {
    const newFruitData = req.body;
    const newFruit: Fruit = {
      id: (fruits.length + 1).toString(),
      name: newFruitData.name,
      type: newFruitData.type,
      meaning: newFruitData.meaning,
      properties: newFruitData.properties,
    };

    fruits.push(newFruit);
    const transformedFruit = transformFruit(newFruit);
    res.status(201).json(transformedFruit);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ message: errorMessage });
  }
};

export const updateFruit: RequestHandler<
  FruitParams,
  ApiResponse<Fruit>,
  UpdateFruitInput
> = (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const fruitIndex = fruits.findIndex((f) => f.id === id);
    if (fruitIndex === -1) {
      res.status(404).json({ message: "Fruit not found" });
      return;
    }

    const updatedFruit: Fruit = {
      ...fruits[fruitIndex],
      ...updateData,
      id,
    };

    fruits[fruitIndex] = updatedFruit;
    const transformedFruit = transformFruit(updatedFruit);
    res.json(transformedFruit);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ message: errorMessage });
  }
};

export const deleteFruit: RequestHandler<FruitParams> = (req, res) => {
  try {
    const { id } = req.params;
    const fruitIndex = fruits.findIndex((f) => f.id === id);

    if (fruitIndex === -1) {
      res.status(404).json({ message: "Fruit not found" });
      return;
    }

    fruits.splice(fruitIndex, 1);
    res.status(204).send();
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
};
