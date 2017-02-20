var express = require('express');
var app = express();

app.use('/build', express.static(__dirname + '/build'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index_server.html');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
