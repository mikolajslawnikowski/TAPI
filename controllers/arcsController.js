import { arcs } from "../data/data.js";
import { transformArcData, transformArcs } from "../utils/helper.js";

export const getAllArcs = (req, res) => {
  try {
    if (arcs.length === 0) {
      return res.status(404).json({
        message: "No arcs found",
        _links: {
          self: { href: "/arcs" },
        },
      });
    }

    const transformedData = transformArcs(arcs);

    res.status(200).json({
      data: transformedData,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getArcById = (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        message: "Invalid ID format",
        _links: {
          self: { href: "/arcs" },
        },
      });
    }

    const arc = arcs.find((a) => a.id === id);

    if (!arc) {
      return res.status(404).json({
        message: "Arc not found",
        _links: {
          arcs: { href: "/arcs" },
        },
      });
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

export const createArc = (req, res) => {
  const { name, firstChapter, lastChapter, characters, plot } = req.body;

  if (!name || !firstChapter || !lastChapter || !characters || !plot) {
    return res.status(400).json({
      message: "Missing required fields",
    });
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

export const updateArc = (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const arc = arcs.find((a) => a.id === id);

  if (!arc) {
    return res.status(404).json({
      message: "Arc not found",
    });
  }

  try {
    Object.keys(updateData).forEach((key) => {
      if (arc.hasOwnProperty(key)) {
        arc[key] = updateData[key];
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
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteArc = (req, res) => {
  const { id } = req.params;
  const arcIndex = arcs.findIndex((a) => a.id === id);

  if (arcIndex === -1) {
    return res.status(404).json({
      message: "Arc not found",
    });
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
