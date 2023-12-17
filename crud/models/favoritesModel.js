const queries = require("../../seed/queriesUser");
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

const checkFavorite = async (placeId, userId) => {
  try {
    const result = await pool.query(
      "SELECT * FROM favorites WHERE place_id = $1 AND user_id = $2",
      [placeId, userId]
    );
    return result.rows.length > 0;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addFavorite,
  checkFavorite,
};
