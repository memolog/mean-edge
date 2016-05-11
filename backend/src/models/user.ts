'use strict'

import * as mongoose from 'mongoose'
import {makeHash} from '../controllers/auth/local' 
import * as jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../env'

const ObjectId = mongoose.Types.ObjectId

export interface MEUser {
  email: string
  password: string
  salt: string
}

export interface MEUserPayload {
  _id: mongoose.Types.ObjectId
  expired: Date
}

export interface MEUserModel extends MEUser, mongoose.Document{
  verifyPassword: FunctionConstructor,
  getToken: FunctionConstructor  
}

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

export const User = mongoose.model<MEUserModel>('User', UserSchema)