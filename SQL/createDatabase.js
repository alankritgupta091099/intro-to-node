var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asg-123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("create database mydb", function (err, result) {
    if (err) throw err;
    console.log("Database Created");
  });
});