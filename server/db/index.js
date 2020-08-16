const mysql = require("mysql2");

const password = process.env.PURI_DB_PASSWORD;
const host = "puri-database.cofca5azrzzy.ap-northeast-2.rds.amazonaws.com";
const connection = mysql.createConnection({
  host,
  user: "admin",
  password,
  database: "puri_database",
  port: 3306
});
connection.connect();

module.exports = connection;
