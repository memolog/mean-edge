'use strict'

import * as mongoose from 'mongoose'
import {makeHash} from '../apis/auth/local'
import * as jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../env'
import {MEUser, MEUserModel, MEUserJSON} from './user.d'
import {MEPayload} from './payload'

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  salt: String
})

UserSchema.method('verifyPassword', function(decryptedPassword:string):boolean{
  const hashResult = makeHash(decryptedPassword, this.salt)
  return this.password === hashResult.hashedPassword
})

UserSchema.method('me', function():MEUserJSON{
  const me:MEUserJSON = {
    _id: this._id,
    email: this.email
  }
  return me
})

export const User = mongoose.model<MEUserModel>('User', UserSchema)
