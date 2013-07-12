var express = require('express');

var app = express.createServer(express.logger());

var out = "message from a variable";

var buf = new buffer(256);

var fs = require('fs');

app.get('/', function(request, response) {
  buf = fs.readFileSync('index.html');
//  out = buf.toString();
  response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
