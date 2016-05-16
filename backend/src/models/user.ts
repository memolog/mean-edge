'use strict'

import * as mongoose from 'mongoose'
import {makeHash} from '../apis/auth/local' 
import * as jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../env'
import {MEUser, MEUserModel, MEUserPayload, MEUserJSON} from './user.d'

const ObjectId = mongoose.Types.ObjectId

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  salt: String
})

UserSchema.method('verifyPassword', function(decryptedPassword:string):boolean{
  const hashResult = makeHash(decryptedPassword, this.salt)
  return this.password === hashResult.hashedPassword
})

UserSchema.method('getToken', function():string{
  const payload:MEUserPayload = {
    _id: this._id,
    expired: new Date(Date.now()+86400000)
  }
  return jwt.sign(payload, TOKEN_SECRET)
})

UserSchema.method('me', function():MEUserJSON{
  const me:MEUserJSON = {
    email: this.email
  }
  return me
})

export const User = mongoose.model<MEUserModel>('User', UserSchema)