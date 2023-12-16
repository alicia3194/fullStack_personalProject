const queryUser = {
  getUserById: `SELECT *
    FROM users
    WHERE user_id=$1`,
  updateUser: `UPDATE users
    SET name = $1, email = $2, password = $3
    WHERE user_id = $4;`,
  createUser: `INSERT INTO users(name, email, password)
    VALUES ($1, $2, $3) RETURNING *;`,
};

module.exports = queryUser;
