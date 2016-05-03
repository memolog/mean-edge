'use strict';
var express = require('express');
var mongoose = require('mongoose');
var debug = require('debug');
var env = require('./env');
var glob = require('glob');
// middlewares
var compression = require('compression');
var helmet = require('helmet');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var csp_1 = require('./routes/middlewares/csp');
var logger = debug('meanedge-server');
var app = express();
var root = env.root;
console.log("Server now has started as " + process.env.NODE_ENV + " mode");
// Connect MongoDB
var db = mongoose.connect(env.DB_URL);
db.connection.on('error', function (err) {
    console.log('Mongoose connection error occured');
    console.log(err);
    if (process.env.NODE_ENV === 'production') {
        process.exit(1);
    }
});
db.connection.on('connected', function () {
    console.log('MongoDB has been connected');
});
process.on('SIGTERM', function () {
    db.disconnect(function () {
        console.log('Process got SIGTERM sygnal, so quit process');
    });
});
// Load Mongoose Models
glob.sync(__dirname + '/models/*.js').forEach(function (path) { return require(path); });
// compress all 'compressible' requests
// https://github.com/expressjs/compression
app.use(compression());
app.use(bodyParser.json());
app.disable('x-powered-by');
app.use(favicon(root + '/static/favicon.ico'));
app.use('/', express.static(root + '/static'));
app.use('/static', express.static(root + '/static'));
app.use(morgan('combined'));
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(csp_1.default);
var index_1 = require('./routes/doc/index');
app.use('/doc', index_1.default);
app.use('/test', function (req, res, next) {
    res.send('Backend server works!');
});
app.use(function (req, res, next) {
    res.status(404);
    res.send('Not Found');
});
app.listen(3000, function () {
    logger('Server start listing port ' + 3000);
});
