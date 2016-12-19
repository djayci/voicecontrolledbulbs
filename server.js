var express = require('express');
var https = require('https');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {

  res.sendFile('public/index.html' , { root : __dirname});
});

https.createServer({

  key: fs.readFileSync('certificates/key.pem'),
  cert: fs.readFileSync('certificates/server.crt')
}, app).listen(443, function(){

  console.log("server is running on 443")
});