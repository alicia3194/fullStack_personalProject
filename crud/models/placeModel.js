const queries = require("../../seed/queriesUser");
const pool = require("../../config/dbsql");

const getAllPlaces = async () => {
  try {
    const places = await pool.query("SELECT * FROM Places");
    return places;
  } catch (error) {
    throw error;
  }
};

const getPlacesByType = async (type) => {
  try {
    const places = await pool.query("SELECT * FROM Places WHERE Type = $1", [
      type,
    ]);
    return places;
  } catch (error) {
    throw error;
  }
};

const getPlacesByName = async (name) => {
  try {
    const places = await pool.query(
      "SELECT * FROM Places WHERE Name ILIKE $1",
      [`%${name}%`]
    );
    return places;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPlaces,
  getPlacesByType,
  getPlacesByName,
};
