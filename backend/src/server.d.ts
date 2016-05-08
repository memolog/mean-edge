import {MEUserModel} from './models/user'

declare module Express {
  export interface Request {
    doc?: Object
    user?: MEUserModel
  }
}