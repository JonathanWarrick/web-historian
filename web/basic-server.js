var http = require("http");
var handler = require("./request-handler");

var port = 8080;
var ip = "127.0.0.1";

var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

// var express = require('express');
// var app = express();
// http.createServer(app);
// app.use(express.static(__dirname +'/public'));
// app.get('/', handler.sendFile);
