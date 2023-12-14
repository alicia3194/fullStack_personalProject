const queries = require("../../seed/queries");
const pool = require("../../config/dbsql");

const addFavorite = async (placeId, userId) => {
  try {
    await pool.query(
      "INSERT INTO favorites (place_id, user_id) VALUES ($1,$2)",
      [placeId, userId]
    );
  } catch (error) {
    throw error;
  }
};
//borrar favorito

module.exports = {
  addFavorite,
};
