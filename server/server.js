var db = require('./model/db.js');
var https = require('https');
var fs = require('fs');
var app = require('./app.js');
// Setup HTTPS
var options = {
  key: fs.readFileSync('private.key'),
  cert: fs.readFileSync('certificate.pem')
};

var httpsPort = process.env.port || 8080;

var secureServer = https.createServer(options, app).listen(httpsPort);

db.connect()
  .then(function(conn){
    console.log(conn.name);
    secureServer.listen(httpsPort, function(){
      console.log('Secure Two Cats Server listening on port:', httpsPort);
    });
  }, function(err){
    console.log(err);
  });
