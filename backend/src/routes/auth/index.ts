'use strict'

import * as express from 'express'
import {sendPublicKey} from '../../apis/auth/common'
import localAuthRouter from './local'

const router = express.Router()

router.use('/key', sendPublicKey)
router.use('/local', localAuthRouter)

export default router
