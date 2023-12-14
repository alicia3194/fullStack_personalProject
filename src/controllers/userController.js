const userLogin = require("../models/userModel");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    await userLogin.loginUser({ email, password });

    res.status(200).json({ message: "Usuario logeado" });
  } catch (error) {
    res.status(500).json({ message: "Error al logearte" });
  }
};

module.exports = {
  loginUser,
};
