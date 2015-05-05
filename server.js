var express = require('express');

// middlewares
var compression = require('compression');
var helmet = require('helmet');
var csp = require('./app/routes/middlewares/csp');
var logger = require('morgan');
var favicon = require('serve-favicon');

var debug = require('debug')('meanedge-server');

var app = express();
var root = __dirname;

// compress all 'compressible' requests
// https://github.com/expressjs/compression
app.use(compression());

app.disable('x-powered-by');

// favicon.icon
app.use(favicon(root + '/public/static/favicon.ico'));

app.use('/public/static',express.static(root + '/public/static'));

app.use(logger('combined'));

app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
// app.use(csp);

app.use('/', function(req, res, next) {
  res.sendFile(root + '/public/static/index.html');
});

app.listen(3000, function() {
  debug('Server start listing port ' + 3000);
});
