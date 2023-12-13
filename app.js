require("dotenv").config();

const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

// middlewares

app.use(express.json());

// Rutas
const placeRoutes = require("./src/routes/placeRoutes");
const favoritesRoutes = require("./src/routes/favoritesRoutes");
// const userRoutes = require("./src/routes/userRoutes");

app.use("/api/places", placeRoutes);
//app.get("/api/users", userRoutes);
app.use("/api/favorites", favoritesRoutes);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
