const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error("Error en el cliente");
//   }
//   client.query("SELECT NOW()", (err, result) => {
//     release();
//     if (err) {
//       return console.error("Error");
//     }
//     console.log(result.rows);
//   });
// });

module.exports = pool;
