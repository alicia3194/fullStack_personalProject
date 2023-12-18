const favoritesModel = require("../models/favoritesModel");

const addFavorite = async (req, res) => {
  const { placeId, userId } = req.body;

  try {
    await favoritesModel.addFavorite(placeId, userId);
    res.json({ message: "Favorito guardado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const checkFavorite = async (req, res) => {
  const { placeId, userId } = req.body;

  try {
    const isFavorite = await favoritesModel.checkFavorite(placeId, userId);
    res.json({ isFavorite });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addFavorite,
  checkFavorite,
};
