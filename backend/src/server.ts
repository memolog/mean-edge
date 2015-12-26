'use strict'

import * as express from 'express';

// middlewares
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as favicon from 'serve-favicon';
import * as path from 'path';
import * as debug from 'debug';
import csp from './routes/middlewares/csp';
import * as env from './env';

let logger = debug('meanedge-server');
let app = express();
let root = env.root;

app.set('views', root + '/backend/views');
app.set('view engine', 'jade');

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
app.use(csp);

import router from './routes/index'
app.use('/', router);

app.use((req, res, next) => {
  res.status(404);
  res.send('Not Found');
})

app.listen(3000, () => {
  logger('Server start listing port ' + 3000);
});
