var db = require('./model/db.js');
var http = require('http');
var fs = require('fs');
var app = require('./app.js');


var httpPort = process.env.port || 8080;

var server = http.createServer(app).listen(httpPort);

db.connect()
  .then(function(conn){
    console.log(conn.name);
    server.listen(httpPort, function(){
      console.log('Two Cats Server listening on port:', httpPort);
    });
  }, function(err){
    console.log(err);
  });
