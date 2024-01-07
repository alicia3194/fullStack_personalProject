const pool = require("../../config/dbsql");
const queries = require("../../seed/queriesUser");

const createUser = async (userInfo) => {
  const { name, email, password } = userInfo;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(
      "INSERT INTO Users(Name, Email, Password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password]
    );
    result = data.rows[0];
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
  return result;
};

const loginUser = async (email, password) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.loginUser, [email]);
    const user = data.rows[0];

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const passwordMatch = user.password === password;
    if (passwordMatch) {
      result = user;
    } else {
      throw new Error("Contraseña incorrecta");
    }
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
  return result;
};

const getUserByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query("SELECT * FROM Users WHERE Email = $1", [
      email,
    ]);
    result = data.rows[0];
    client.release();
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
  return result;
};

const getUserById = async (userId) => {
  try {
    const result = await pool.query("SELECT * FROM Users WHERE User_id = $1", [
      userId,
    ]);
    return result.rows[0];
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
