import * as mongoose from 'mongoose'

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
  getToken: Function  
}