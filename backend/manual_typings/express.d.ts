import {MEUserModel, MEUserPayload} from '../src/models/user.d'

declare module Express {
  export interface Request {
    doc?: Object
    user?: MEUserModel,
    token?: MEUserPayload
  }
}