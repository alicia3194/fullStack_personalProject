const jwt = require("../middlewares/checkToken");

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const checkToken = jwt.verifyToken(token);

  if (!checkToken) {
    return res.status(401).json({ error: "Token no válido" });
  }

  req.userId = checkToken.userId;
  next();
};

module.exports = {
  authenticateUser,
};
