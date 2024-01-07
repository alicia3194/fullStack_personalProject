const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const jwt = require("../../middlewares/checkToken");

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;

    const createdUser = await userModel.createUser(newUser);
    const token = jwt.generateToken({ user_id: createdUser.user_id });

    res.status(201).json({
      message: "Usuario creado",
      user: createdUser,
      token: token,
    });
  } catch (error) {
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
          user: { user_id: user.user_id, email: user.email },
          message: "Inicio de sesión correcto",
          token: token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
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
        user_id: user.user_id,
        name: user.name,
        email: user.email,
      };
    } else {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (userId) => {
  try {
    const result = await db.one("SELECT * FROM Users WHERE User_id = $1", [
      userId,
    ]);
    return result;
  } catch (error) {
    console.error("Error en getUserById:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  loginUser,
  getUserByEmail,
  getUserById,
};
