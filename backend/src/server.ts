'use strict'

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as debug from 'debug';
import * as env from './env';
import * as glob from 'glob';

// middlewares
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as favicon from 'serve-favicon';
import * as bodyParser from 'body-parser';
import csp from './routes/middlewares/csp';

let logger = debug('meanedge-server');
let app = express();
let root = env.root;

console.log(`Server now has started as ${process.env.NODE_ENV} mode`);

// Connect MongoDB
let db = mongoose.connect(env.DB_URL);

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
app.use(csp);

import docRouter from './routes/doc/index'

app.use('/doc', docRouter)

app.use('/test', function(req, res, next){
  res.send('Backend server works!');
});

app.use((req, res, next) => {
  res.status(404);
  res.send('Not Found');
});

app.listen(3000, () => {
  logger('Server start listing port ' + 3000);
});


