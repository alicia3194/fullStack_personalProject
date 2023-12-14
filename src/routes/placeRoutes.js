const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");

router.get("/", placeController.getAllPlaces);
router.get("/type/:type", placeController.getPlacesByType); //por type
router.get("/name/:name", placeController.getPlacesByName);

module.exports = router;
