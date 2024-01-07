const userModel = require("../models/userModel");
const favoritesModel = require("../models/favoritesModel");

const checkFavorite = async (req, res) => {
  try {
    const { place_id, user_id } = req.body;

    const user = await userModel.getUserById(user_id);

    const isFavorite = await favoritesModel.checkFavorite(place_id, user_id);

    res.json({ isFavorite });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const saveFavorite = async (req, res) => {
  const { place_id, user_id } = req.body;
  try {
    const saved = await favoritesModel.saveFavorite(place_id, user_id);

    if (saved) {
      console.log("Lugar guardado correctamente.");
      res.json({ success: true, message: "Guardado" });
    } else {
      console.log("No se pudo guardar el lugar.");
      res.json({
        success: false,
        message: "No se puede guardar",
      });
    }
  } catch (error) {
    console.error("Error en saveFavorite:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteFavorite = async (req, res) => {
  const { place_id, user_id } = req.body;
  try {
    console.log(
      "Llamada a deleteFavorite con placeId:",
      place_id,
      "y userId:",
      user_id
    );
    const delet = await favoritesModel.deleteFavorite(place_id, user_id);

    if (delet) {
      console.log("Lugar eliminado correctamente.");
      res.json({ success: true, message: "Eliminado" });
    } else {
      console.log("No se pudo eliminar el lugar.");
      res.json({
        success: false,
        message: "No se puede eliminar",
      });
    }
  } catch (error) {
    console.error("Error en deleteFavorite:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  saveFavorite,
  checkFavorite,
  deleteFavorite,
};
