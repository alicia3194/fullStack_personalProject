// En tu archivo de controladores (placeController.js)
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
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los lugares por tipo" });
  }
};

const getPlacesQuery = async (req, res) => {
  const { type, name } = req.query;
  try {
    let places;
    if (type) {
      places = await placeModel.getPlacesByType(type); // buscar por type
    } else if (name) {
      places = await placeModel.getPlacesQuery(name); // buscar por name
    } else {
      return alert("Lugar no encontrado");
    }
    res.status(200).json(places);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los lugares por tipo o nombre" });
  }
};

module.exports = {
  getAllPlaces,
  getPlacesByType,
  getPlacesQuery,
};
