var db = require('./model/db.js');
var http = require('http');
var fs = require('fs');
var app = require('./app.js');


  var port = process.env.PORT || 3000;
  db.connect()
  .then(function(){
    console.log('Db is connected');
    app.listen(port, function(){
      console.log("Two Cats Server listening on port:" + port);
    });
  });
