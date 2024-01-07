const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favoritesController");

router.post("/check", favoritesController.checkFavorite);
router.get("/check", favoritesController.checkFavorite);
router.post("/save", favoritesController.saveFavorite);
router.delete("/delete", favoritesController.deleteFavorite);

module.exports = router;
