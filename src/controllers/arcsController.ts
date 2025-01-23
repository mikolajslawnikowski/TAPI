import { RequestHandler } from "express";
import { arcs } from "../data/data";
import { transformArcData, transformArcs } from "../utils/helper";
import { Arc, ArcRequest, ArcParams, ArcCharacter } from "../types/arc";
import { ApiResponse } from "../types/responses";
import { APIError } from "../types/error";

interface UpdateArcData {
  name?: string;
  firstChapter?: number;
  lastChapter?: number;
  characters?: ArcCharacter[];
  plot?: string;
}

export const getAllArcs: RequestHandler = (_req, res) => {
  try {
    if (arcs.length === 0) {
      res.status(404).json({
        message: "No arcs found",
        _links: {
          self: { href: "/arcs" },
        },
      });
    } else {
      const transformedData = transformArcs(arcs);
      res.status(200).json({
        data: transformedData,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getArcById: RequestHandler<{ id: string }> = (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      res.status(400).json({
        message: "Invalid ID format",
        _links: {
          self: { href: "/arcs" },
        },
      });
      return;
    }

    const arc = arcs.find((a) => a.id === id);

    if (!arc) {
      res.status(404).json({
        message: "Arc not found",
        _links: {
          arcs: { href: "/arcs" },
        },
      });
      return;
    }

    res.status(200).json({
      data: transformArcData(arc),
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const createArc: RequestHandler<{}, ApiResponse<Arc>, Arc> = (
  req,
  res
) => {
  const { name, firstChapter, lastChapter, characters, plot } = req.body;

  if (!name || !firstChapter || !lastChapter || !characters || !plot) {
    res.status(400).json({
      message: "Missing required fields",
    });
    return;
  }

  try {
    const newArc = {
      id: (arcs.length + 1).toString(),
      name,
      firstChapter,
      lastChapter,
      characters,
      plot,
    };

    arcs.push(newArc);

    res.status(201).json({
      message: "Arc created successfully",
      data: newArc,
      _links: {
        self: { href: `/arcs/${newArc.id}` },
        allArcs: { href: "/arcs" },
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const updateArc: RequestHandler<
  ArcParams["params"],
  ApiResponse<Arc>,
  Partial<Arc>
> = (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const arc = arcs.find((a) => a.id === id);

  if (!arc) {
    res.status(404).json({
      message: "Arc not found",
    });
    return;
  }

  try {
    const validKeys = [
      "name",
      "firstChapter",
      "lastChapter",
      "characters",
      "plot",
    ] as const;
    validKeys.forEach((key) => {
      if (key in updateData && updateData[key] !== undefined) {
        (arc[key] as UpdateArcData[typeof key]) = updateData[key];
      }
    });

    res.status(200).json({
      message: "Arc updated successfully",
      data: arc,
      _links: {
        self: { href: `/arcs/${id}` },
        allArcs: { href: "/arcs" },
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
};

export const deleteArc: RequestHandler<{ id: string }> = (req, res) => {
  const { id } = req.params;
  const arcIndex = arcs.findIndex((a) => a.id === id);

  if (arcIndex === -1) {
    res.status(404).json({
      message: "Arc not found",
    });
    return;
  }

  try {
    arcs.splice(arcIndex, 1);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
