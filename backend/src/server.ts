/// <reference path="./server.d.ts" />

'use strict'

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as debug from 'debug';
import {root, PORT, DB_URL, TOKEN_SECRET} from './env';
import * as glob from 'glob';

// middlewares
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import csp from './routes/middlewares/csp';

let logger = debug('meanedge-server');
let app = express();

import * as passport from 'passport'
import {localStorategy} from './controllers/auth/local'
import {User} from './models/user'

import * as jwt from 'express-jwt'

console.log(`Server now has started as ${process.env.NODE_ENV} mode`);

// Connect MongoDB
let db = mongoose.connect(DB_URL);

db.connection.on('error',function(err){
  console.log('Mongoose connection error occured');
  console.log(err);
  if (process.env.NODE_ENV === 'production'){
    process.exit(1);    
  }
});

db.connection.on('connected', function(){
  console.log('MongoDB has been connected');
});

process.on('SIGTERM', function(){
  db.disconnect(function(){
    console.log('Process got SIGTERM sygnal, so quit process');
  });
});

// Load Mongoose Models
glob.sync(__dirname + '/models/*.js').forEach((path) => require(path));

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
app.use(csp);

if (process.env.NODE_ENV !== 'production') {
  app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS PUT DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })
  app.use('/js', express.static(root + '/nginx/static/js'));
  app.use('/css', express.static(root + '/nginx/static/css'));
  
  app.use('/api/test', jwt({secret: TOKEN_SECRET}),
  function(req, res, next){
    console.log(req.user)
    res.status(200)
    res.send('OK')
  })
}

app.use(passport.initialize())

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id)
    .exec((err, user) => {
      if (err) {
        done(err, false)
        return
      }
      done(null, user)
    })
});
  
passport.use('local', localStorategy)

import docRouter from './routes/doc/index'
import authRouter from './routes/auth/index'

app.use('/doc', docRouter)
app.use('/auth', authRouter)

app.use('/test', function(req, res, next){
  res.send('Backend server works!');
});

if (process.env.NODE_ENV !== 'production') {
  app.use('/', function(req, res, next){
    res.sendFile(root + '/nginx/static/index.html')
  })
}

app.use((req, res, next) => {
  res.status(404);
  res.send('Not Found');
})

app.listen(PORT, () => {
  logger('Server start listing port ' + PORT);
})
