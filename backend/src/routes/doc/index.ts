'use strict'

import * as express from 'express'
import * as env from '../../env'

let router = express.Router()
let root = env.root

import * as controller from '../../controllers/doc/index'
router.get('/', controller.index)

import apiRouter from './api'
router.use('/api', apiRouter);



export default router