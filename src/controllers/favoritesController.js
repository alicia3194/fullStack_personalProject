const favoritesModel = require("../models/favoritesModel");

const addFavorite = async (req, res) => {
  const { placeId } = req.body;

  try {
    await favoritesModel.addFavorite(placeId);
    res.json({ message: "Favorito agregado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addFavorite,
};
