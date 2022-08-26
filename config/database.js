const mysql = require("mysql2");

const databaseConnection = mysql.createConnection({
  host: "bnnyn9ggvtwt2axkong3-mysql.services.clever-cloud.com",
  user: "u21pjo2uiwtwp9t3",
  database: "bnnyn9ggvtwt2axkong3",
  password: "YMQLbk0qJrjpEL4YqSr4",
});

databaseConnection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Servidor conectado a MYSQL");
  }
});
module.exports = databaseConnection;
