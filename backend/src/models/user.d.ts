import * as mongoose from 'mongoose'

export interface MEUser {
  email: string
  password: string
  salt: string
}

export interface MEUserJSON {
  _id: string
  email: string
}

export interface MEUserModel extends MEUser, mongoose.Document{
  verifyPassword: Function,
  getToken: Function,
  me: Function
}
