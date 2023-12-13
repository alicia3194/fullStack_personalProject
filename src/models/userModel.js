// const pool = require("../../config/dbsql");

// const loginUser = async (email, password) => {
//   try {
//     const user = await pool.oneOrNone(
//       "SELECT * FROM users WHERE email = $1 AND password = $2",
//       [email, password]
//     );
//     if (user) {
//       return user;
//     } else {
//       throw new Error("Credenciales incorrectas");
//     }
//   } catch (error) {
//     throw new Error("Error en la autenticación del usuario");
//   }
// };

// module.exports = {
//   loginUser,
// };
