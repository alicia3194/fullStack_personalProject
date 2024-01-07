const pool = require("../../config/dbsql");

const saveFavorite = async (placeId, userId) => {
  try {
    const result = await pool.query(
      "INSERT INTO Favorites (Place_id, User_id) VALUES ($1, $2) RETURNING *",
      [placeId, userId]
    );
    return result.rowCount > 0;
  } catch (error) {
    console.error("Error en saveFavorite:", error);
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
    console.error("Error en checkFavorite:", error);
    throw error;
  }
};

const deleteFavorite = async (placeId, userId) => {
  try {
    const result = await pool.query(
      "DELETE FROM Favorites WHERE Place_id = $1 AND User_id = $2 RETURNING *",
      [placeId, userId]
    );
    return result.rowCount > 0;
  } catch (error) {
    console.error("Error en deleteFavorite:", error);
    throw error;
  }
};

module.exports = {
  saveFavorite,
  checkFavorite,
  deleteFavorite,
};
