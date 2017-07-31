var express = require('express');
var app = express();
var index = require('./src/index.marko');

app.get('/', function (req, res) {
  //res.marko(index, {});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

