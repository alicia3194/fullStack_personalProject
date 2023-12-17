require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const cors = require("cors");

// Permitir todas las solicitudes CORS
app.use(cors());
app.use(express.json());

// Rutas
const placeRoutes = require("./crud/routes/placeRoutes");
const favoritesRoutes = require("./crud/routes/favoritesRoutes");
const userRoutes = require("./crud/routes/userRoutes");

app.use("/api/places", placeRoutes);
app.use("/api/users", userRoutes);
app.use("/api/favorites", favoritesRoutes);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
