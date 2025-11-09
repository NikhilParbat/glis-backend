const Land = require("../models/landModel.js");

const getAllLands = async (req, res) => {
  try {
    const lands = await Land.find();
    res.status(200).json(lands);
    console.log("Get all lands function called");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addLand = async (req, res) => {
  try {
    const land = await Land.create(req.body);
    res.status(201).json(land);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getLandById = async (req, res) => {
  try {
    const land = await Land.findById(req.params.id);
    if (!land) return res.status(404).json({ message: "Land not found" });
    res.json(land);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editLand = async (req, res) => {
  try {
    const land = await Land.findByIdAndUpdate(req.params.id);
    if (!land) return res.status(404).json({ message: "Land not found" });
    res.json(land);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllLands,
  addLand,
  getLandById,
  editLand,
};
