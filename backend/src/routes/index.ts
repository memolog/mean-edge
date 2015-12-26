'use strict'

import * as express from 'express'
import * as env from '../env'

let router = express.Router()
let root = env.root

/*
router.get('/', (req, res, next) => {
  return res.sendFile(root + '/frontend/public/static/index.html');
});
*/

import * as indexController from '../controllers/index'
router.get('/', indexController.index)

export default router