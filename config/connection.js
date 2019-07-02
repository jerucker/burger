// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "bn707w3gfdytsrrj",
  password: "pmfj2wlmkljqz9p4",
  database: "xia5hvdgjug0gyrg"
});


// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 8889,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
