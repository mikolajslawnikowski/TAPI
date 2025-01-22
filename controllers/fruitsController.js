import { fruits } from "../data/data.js";
import { transformFruit, transformFruits } from "../utils/helper.js";

export const getAllFruits = (req, res) => {
  try {
    const transformedFruits = transformFruits(fruits);
    res.json(transformedFruits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFruitById = (req, res) => {
  try {
    const { id } = req.params;
    const fruit = fruits.find((f) => f.id === id);

    if (!fruit) {
      return res.status(404).json({ message: "Fruit not found" });
    }

    const transformedFruit = transformFruit(fruit);
    res.json(transformedFruit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFruit = (req, res) => {
  try {
    const newFruit = req.body;
    newFruit.id = (fruits.length + 1).toString();

    fruits.push(newFruit);
    const transformedFruit = transformFruit(newFruit);

    res.status(201).json(transformedFruit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateFruit = (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const fruitIndex = fruits.findIndex((f) => f.id === id);
    if (fruitIndex === -1) {
      return res.status(404).json({ message: "Fruit not found" });
    }

    const updatedFruit = { ...fruits[fruitIndex], ...updateData, id };
    fruits[fruitIndex] = updatedFruit;

    const transformedFruit = transformFruit(updatedFruit);
    res.json(transformedFruit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteFruit = (req, res) => {
  try {
    const { id } = req.params;
    const fruitIndex = fruits.findIndex((f) => f.id === id);

    if (fruitIndex === -1) {
      return res.status(404).json({ message: "Fruit not found" });
    }

    fruits.splice(fruitIndex, 1);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
