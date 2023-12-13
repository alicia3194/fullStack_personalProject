const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favoritesController");

router.post("/add", favoritesController.addFavorite); //favoritos

module.exports = router;
