const userModel = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const newUser = req.body; // {name, email, password}
    const createdUser = await userModel.createUser(newUser);

    res.status(201).json({
      message: "Usuario creado exitosamente",
      user: createdUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Obtener el usuario de la base de datos por correo electrónico
    const user = await userModel.getUserByEmail(email);

    if (user) {
      // Comparación directa de contraseñas (no segura para producción)
      const passwordMatch = user.password === password;
      if (passwordMatch) {
        res.status(200).json({
          user: { email: user.email },
          message: "Inicio de sesión exitoso",
        });
      } else {
        throw new Error("Contraseña incorrecta");
      }
    } else {
      throw new Error("Usuario no encontrado");
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.getUserByEmail(email);

    if (user) {
      res.status(200).json({
        user,
        message: "Usuario encontrado",
      });
    } else {
      throw new Error("Usuario no encontrado");
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
  getUserByEmail,
};
