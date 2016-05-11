'use strict'

import * as express from 'express'
const cryptico = require('cryptico-js')
import * as passport from 'passport'
import * as passportLocal from 'passport-local'
import {decrypt, localStorategy, makeHash, createUser} from '../../controllers/auth/local'
import {User, MEUserModel, MEUser} from '../../models/user'

let router = express.Router()

router.route('/signin')
  .post((req, res, next) => {
    try {
      const password:string = req && req.body && req.body.password || ''
      if (!password.length){
        res.status(400);
        return next(new Error('Password required'))
      }
      req.body.decryptedPassword = decrypt(password)
      next()
    } catch (err) {
      res.status(500)
      next(err)
    }
  }, 
  passport.authenticate('local'),
  (req, res, next) => {
    const user:MEUserModel = req && req.user || null
    if (user) {
      res.json({
        token: user.getToken()
      })
      return
    }
    
    next(new Error('User is not found'))
  })

export default router