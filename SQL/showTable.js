var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asg-123",
  database:"mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql="select name, address from customers";
  con.query(sql, function (err, result,fields) {
    if (err) throw err;
    console.log(result[1]);
  });
});