var mysql = require("mysql");

var connMysql = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "password",
    database: "portal_noticias",
  });
}

module.exports = function () {
  return connMysql;
}
