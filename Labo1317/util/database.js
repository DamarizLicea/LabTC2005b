const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "dama",
  database: "lablalo",
  password: "",
});

module.exports = pool.promise();
