const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Post@123",
  database: "usersystem",
});

module.exports = connection.promise();
