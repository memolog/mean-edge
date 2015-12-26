'use strict';
var express = require('express');
// middlewares
var compression = require('compression');
var helmet = require('helmet');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var debug = require('debug');
var csp_1 = require('./routes/middlewares/csp');
var env = require('./env');
var logger = debug('meanedge-server');
var app = express();
var root = env.root;
// compress all 'compressible' requests
// https://github.com/expressjs/compression
app.use(compression());
app.disable('x-powered-by');
// favicon.icon
app.use(favicon(root + '/frontend/public/static/favicon.ico'));
app.use('/public/static', express.static(root + '/frontend/public/static'));
app.use('/node_modules', express.static(root + '/frontend/node_modules'));
app.use(morgan('combined'));
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(csp_1["default"]);
var index_1 = require('./routes/index');
app.use('/', index_1["default"]);
app.use(function (req, res, next) {
    res.status(404);
    res.send('Not Found');
});
app.listen(3000, function () {
    logger('Server start listing port ' + 3000);
});
