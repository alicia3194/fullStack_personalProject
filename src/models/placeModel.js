const queries = require("../../seed/queries");
const pool = require("../../config/dbsql");

const getAllPlaces = async () => {
  try {
    const places = await pool.query("SELECT * FROM Places");
    return places;
  } catch (error) {
    return "Error";
  }
};

const getPlacesByType = async (type) => {
  try {
    const places = await pool.any("SELECT * FROM Places WHERE Type = $1", [
      type,
    ]);
    return places;
  } catch (error) {
    return "Error";
  }
};

const getPlacesQuery = async (query) => {
  try {
    const places = await pool.any(
      "SELECT * FROM Places WHERE Name ILIKE $1 OR Type ILIKE $1",
      [`%${query}%`]
    );
    return places;
  } catch (error) {
    return "Error";
  }
};

module.exports = {
  getAllPlaces,
  getPlacesQuery,
};
