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
  //var sql="insert into customers(name ,address) values ('Alankrit','Dg')";
  //////////////for multiple records
  var sql="insert into customers(name ,address) values ?";
  var values=[
      ['agrim1','abc'],
      ['agrim2','abc'],
      ['agrim3','abc'],
      ['agrim4','abc'],
      ['agrim5','abc'],
      ['agrim6','abc']
  ];
  con.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows,"record added");
  });
});