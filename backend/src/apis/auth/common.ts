const cryptico = require('cryptico-js')
import {RSA_Key, COOKIE_PATH, COOKIE_SECRET} from '../../env'

export function sendPublicKey (req, res, next){
  res.json({
    publicKey: cryptico.publicKeyString(RSA_Key)
  })
}

export function insertTokenInCookie(res, token:string):void {
  const expires = new Date(Date.now() + 1209600000)
  res.cookie('token', token, {
    path: COOKIE_PATH,
    expires: expires,
    secure: false, // currently not support ssl
    httpOnly: true,
    signed: true
  })
}