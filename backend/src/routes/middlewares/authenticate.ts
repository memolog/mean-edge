'use strict'

import {MEUserPayload} from '../../models/user.d'

declare module Express {
  export interface Request {
    token?: MEUserPayload
  }
}

import * as express from 'express'
import {TOKEN_SECRET} from '../../env'
import * as jwt from 'express-jwt'

let router = express.Router()

router.route('/').all(
  jwt({secret: TOKEN_SECRET, requestProperty: 'token', getToken(req){
    return req.signedCookies && req.signedCookies.token || ''
  }}),
  function(req:any, res, next) {
    if (!req.token) {
      res.status(401)
      next(new Error('Unauthorized'))
      return
    }
    next()
  }
)

export default router
