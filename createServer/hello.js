// var http= require('http');

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     //res.write("./victimForm.js");
//     res.end("Hello World!!");
// }).listen(8080);

var http= require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/HTML'});
    res.end("Hello worldssss");
}).listen(8080);