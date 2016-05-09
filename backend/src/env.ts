'use strict'

import * as path from 'path'
const cryptico = require('cryptico-js')
export const root = path.resolve(__dirname + '/../')
const mongopath = process.env.NODE_ENV === 'production' ? 'mongo' : 'localhost'
export const DB_URL = `mongodb://${mongopath}/meanedge-dev`
export const PRIVATE_KEY_PHRASE = process.env.PRIVATE_KEY_PHRASE || 'no-secret'
export const RSA_Key = cryptico.generateRSAKey(PRIVATE_KEY_PHRASE, 1024)
export const TOKEN_SECRET = process.env.TOKEN_SECRET || 'no-secret'
export const LOCAL_AUTH_SALT = process.env.LOCAL_AUTH_SALT || 'no-secret-salt'
export const PORT = process.env.PORT || 3000