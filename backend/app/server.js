/// <reference path="./server.d.ts" />
'use strict';
const express = require('express');
const mongoose = require('mongoose');
const debug = require('debug');
const env = require('./env');
const glob = require('glob');
// middlewares
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const csp_1 = require('./routes/middlewares/csp');
let logger = debug('meanedge-server');
let app = express();
let root = env.root;
const passport = require('passport');
const local_1 = require('./controllers/auth/local');
console.log(`Server now has started as ${process.env.NODE_ENV} mode`);
// Connect MongoDB
let db = mongoose.connect(env.DB_URL);
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
glob.sync(__dirname + '/models/*.js').forEach((path) => require(path));
// compress all 'compressible' requests
// https://github.com/expressjs/compression
app.use(compression());
app.use(bodyParser.json());
app.disable('x-powered-by');
app.use(morgan('combined'));
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(csp_1.default);
passport.use('local', local_1.localStorategy);
const index_1 = require('./routes/doc/index');
const index_2 = require('./routes/auth/index');
app.use('/doc', index_1.default);
app.use('/auth', index_2.default);
app.use('/test', function (req, res, next) {
    res.send('Backend server works!');
});
app.use((req, res, next) => {
    res.status(404);
    res.send('Not Found');
});
app.listen(3000, () => {
    logger('Server start listing port ' + 3000);
});
