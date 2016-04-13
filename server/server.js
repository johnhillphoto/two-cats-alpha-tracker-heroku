var db = require('./model/db.js');
var http = require('http');
var fs = require('fs');
var app = require('./app.js');


// var httpPort = process.env.PORT || 8080;

// var server = http.createServer(app).listen(httpPort);

// db.connect()
//   .then(function(conn){
//     console.log(conn.name);
//     server.listen(httpPort, function(){
//       console.log('Two Cats Server listening on port:', httpPort);
//     });
//   }, function(err){
//     console.log(err);
//   });

  var port = process.env.PORT || 3000;
  db.connect()
  .then(function(){
    console.log('Db is connected');
    app.listen(port, function(){
      console.log("Two Cats Server listening on port:" + port);
    });
  });
