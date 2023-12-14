const placeModel = require("../models/placeModel");

const getAllPlaces = async (req, res) => {
  try {
    const places = await placeModel.getAllPlaces();
    res.status(200).json(places.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener todos los lugares" });
  }
};

const getPlacesByType = async (req, res) => {
  try {
    const { type } = req.params;
    const places = await placeModel.getPlacesByType(type);
    res.status(200).json(places.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los lugares por tipo" });
  }
};

const getPlacesByName = async (req, res) => {
  try {
    const { name } = req.params;
    const places = await placeModel.getPlacesByName(name);
    res.status(200).json(places.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los lugares por nombre" });
  }
};

module.exports = {
  getAllPlaces,
  getPlacesByType,
  getPlacesByName,
};
