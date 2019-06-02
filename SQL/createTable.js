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
  var sql="create table customers(id int auto_increment primary key,name varchar(255), address varchar(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Created");
  });
});