'use strict'

import * as mongoose from 'mongoose'

export interface MEPayload {
  _id: mongoose.Types.ObjectId
  expired: Date
  user: mongoose.Types.ObjectId
}

const PayloadSchema = new mongoose.Schema({
  expires: {
    type: Date
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

export interface MEPayloadModel extends MEPayload, mongoose.Document {}

export const Payload = mongoose.model<MEPayloadModel>('Payload', PayloadSchema)
