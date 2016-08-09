import {MEUserModel} from '../src/models/user.d'
import {MEPayload} from '../src/models/payload'

declare module Express {
  export interface Request {
    doc?: Object
    user?: MEUserModel,
    token?: MEPayload
  }
}

declare module "express-serve-static-core" {
  export interface Request extends Express.Request {

  }
}
