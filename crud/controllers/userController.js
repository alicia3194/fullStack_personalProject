const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const jwt = require("../../middlewares/checkToken");

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;

    const createdUser = await userModel.createUser(newUser);

    const token = jwt.generateToken({ userId: createdUser.user_id });

    res.status(201).json({
      message: "Usuario creado",
      user: createdUser,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.getUserByEmail(email);

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        const token = jwt.generateToken({ userId: user.user_id });

        return res.status(200).json({
          user: { email: user.email },
          message: "Inicio de sesión correcto",
          token: token,
        });
      }
    }

    // Si llegamos aquí, el usuario no fue encontrado o la contraseña es incorrecta
    throw new Error("Usuario no encontrado o contraseña incorrecta");
  } catch (error) {
    // Manejar otros errores
    console.error("Error al iniciar sesión:", error);
    return res
      .status(401)
      .json({ error: "Usuario no encontrado o contraseña incorrecta" });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res
        .status(400)
        .json({ error: "Se requiere un correo electrónico" });
    }

    const user = await userModel.getUserByEmail(email);

    if (user) {
      const userResponse = {
        userId: user.user_id,
        name: user.name,
        email: user.email,
      };

      return res.status(200).json({
        user: userResponse,
        message: "Usuario encontrado",
      });
    } else {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
  getUserByEmail,
};
