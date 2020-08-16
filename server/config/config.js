module.exports = {
  development: {
    username: "admin",
    password: process.env.PURI_DB_PASSWORD,
    database: "puri_database",
    host: "puri-database.cofca5azrzzy.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql"
  },

  test: {
    username: "admin",
    password: process.env.PURI_DB_PASSWORD,
    database: "puri_database",
    host: "puri-database.cofca5azrzzy.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql"
  },
  production: {
    username: "admin",
    password: process.env.PURI_DB_PASSWORD,
    database: "puri_database",
    host: "puri-database.cofca5azrzzy.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql"
  }
};
