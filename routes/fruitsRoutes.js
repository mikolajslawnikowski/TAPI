import express from "express";
import {
  getAllFruits,
  getFruitById,
  createFruit,
  updateFruit,
  deleteFruit,
} from "../controllers/fruitsController.js";

const router = express.Router();

router.get("/", getAllFruits);
router.get("/:id", getFruitById);
router.post("/", createFruit);
router.put("/:id", updateFruit);
router.delete("/:id", deleteFruit);

export default router;
