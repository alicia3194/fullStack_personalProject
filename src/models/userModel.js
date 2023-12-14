const pool = require("../../config/dbsql");

//crear login
//borrar usuario

//logeado
const loginUser = async (email, password) => {
  try {
    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );
    if (user) {
      return user;
    } else {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  loginUser,
};
