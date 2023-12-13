// En tu archivo de rutas (placeRoutes.js)
const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");

router.get("/", placeController.getAllPlaces);
router.get("/?", placeController.getPlacesQuery); //por type

module.exports = router;
