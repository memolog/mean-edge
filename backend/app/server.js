'use strict';
const express = require('express');
const mongoose = require('mongoose');
const debug = require('debug');
const env_1 = require('./env');
const glob = require('glob');
// middlewares
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const csp_1 = require('./routes/middlewares/csp');
const authenticate_1 = require('./routes/middlewares/authenticate');
let logger = debug('meanedge-server');
let app = express();
const passport = require('passport');
const local_1 = require('./apis/auth/local');
const user_1 = require('./models/user');
console.log(`Server now has started as ${process.env.NODE_ENV} mode`);
// Connect MongoDB
let db = mongoose.connect(env_1.DB_URL);
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
app.use(cookieParser(env_1.COOKIE_SECRET));
// compress all 'compressible' requests
// https://github.com/expressjs/compression
app.use(compression());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.disable('x-powered-by');
app.use(morgan('combined'));
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(csp_1.default);
const api_1 = require('./apis/user/api');
if (process.env.NODE_ENV !== 'production') {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS PUT DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    app.use('/js', express.static(env_1.root + '/nginx/static/js'));
    app.use('/css', express.static(env_1.root + '/nginx/static/css'));
    app.use(favicon(env_1.root + '/nginx/static/favicon.ico'));
    app.use('/api/test', authenticate_1.default, function (req, res, next) {
        console.log(req.token);
        res.status(200);
        res.send('OK');
    });
}
app.use(passport.initialize());
passport.serializeUser(function (user, done) {
    done(null, user._id);
});
passport.deserializeUser(function (id, done) {
    user_1.User.findById(id)
        .exec((err, user) => {
        if (err) {
            done(err, false);
            return;
        }
        done(null, user);
    });
});
passport.use('local', local_1.localStorategy);
const index_1 = require('./routes/doc/index');
const index_2 = require('./routes/auth/index');
app.use('/doc', index_1.default);
app.use('/auth', index_2.default);
app.use('/test', function (req, res, next) {
    res.send('Backend server works!');
});
app.use('/users/me', authenticate_1.default, function (req, res, next) { console.log(req.token); next(); }, api_1.me);
if (process.env.NODE_ENV !== 'production') {
    app.use('/manifest.json', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        res.sendFile(env_1.root + '/nginx/static/manifest.json');
    });
    app.use('/worker.js', function (req, res, next) {
        res.setHeader('Content-Type', 'application/javascript');
        res.sendFile(env_1.root + '/nginx/static/worker.js');
    });
    app.use('/', function (req, res, next) {
        res.sendFile(env_1.root + '/nginx/static/index.html');
    });
}
app.use((req, res, next) => {
    res.status(404);
    res.send('Not Found');
});
app.listen(env_1.PORT, () => {
    logger('Server start listing port ' + env_1.PORT);
});
