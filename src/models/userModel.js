const pool = require("../../config/dbsql");
const queries = require("../../seed/queriesUser");

const createUser = async (userInfo) => {
  const { name, email, password } = userInfo;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(
      "INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password]
    );
    result = data.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
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

    const passwordMatch = user.password === password; // Asegúrate de manejar la contraseña de manera segura
    if (passwordMatch) {
      result = user;
    } else {
      throw new Error("Contraseña incorrecta");
    }
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getUserByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    result = data.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

module.exports = {
  createUser,
  loginUser,
  getUserByEmail,
};
