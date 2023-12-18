const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favoritesController");

router.post("/add", favoritesController.addFavorite);
router.post("/check", favoritesController.checkFavorite);

module.exports = router;
