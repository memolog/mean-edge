'use strict'

import * as express from 'express'
import * as env from '../../env'

let router = express.Router()

import * as controller from '../../apis/doc/index'
router.get('/', controller.index)

import apiRouter from './api'
router.use('/api', apiRouter);

export default router
