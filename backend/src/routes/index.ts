'use strict'

import * as express from 'express'
import * as env from '../env'

let router = express.Router()
let root = env.root

import * as indexController from '../controllers/index'
import docRouter from './doc/index'

router.get('', indexController.index)
router.use('doc', docRouter)

export default router