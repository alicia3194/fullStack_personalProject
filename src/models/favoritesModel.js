const queries = require("../../seed/queries");
const pool = require("../../config/dbsql");

const addFavorite = async (placeId) => {
  try {
    await pool.none("INSERT INTO favorites (place_id) VALUES ($1)", [placeId]);
  } catch (error) {
    throw new Error("Error al agregar favorito a la base de datos");
  }
};

module.exports = {
  addFavorite,
};
