
require('marko/node-require'); // Allow Node.js to require and load `.marko` files

var express = require('express');
var markoExpress = require('marko/express');
var serveStatic = require('serve-static');
//var template = require('./src/index.marko');

var app = express();

app.use(markoExpress()); //enable res.marko(template, data)

// Allow all of the generated files under "static" to be served up by Express
app.use('/', serveStatic(__dirname + '/static'));

/*app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.marko(template, {});
});*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

