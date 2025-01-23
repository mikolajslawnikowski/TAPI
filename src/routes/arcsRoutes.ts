import { Router, RequestHandler } from "express";
import {
  getAllArcs,
  getArcById,
  createArc,
  updateArc,
  deleteArc,
} from "../controllers/arcsController";

const router = Router();

router.get("/", getAllArcs);
router.get("/:id", getArcById);
router.post("/", createArc);
router.put("/:id", updateArc);
router.delete("/:id", deleteArc);

export default router;
