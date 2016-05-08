const cryptico = require('cryptico-js')
import {RSA_Key, LOCAL_AUTH_SALT} from '../../env';
import * as passportLocal from 'passport-local'
import * as mongoose from 'mongoose'
import {User, MEUser, MEUserModel} from '../../models/user'
import * as crypto from 'crypto'
import * as Promise from 'bluebird'

export function decrypt (cipher:string):string {
  const ret = cryptico.decrypt(cipher, RSA_Key)
  if (ret.status !== 'success'){
    throw new Error('Could not decrypt')
  }
  return ret.plaintext
}

interface hashResult {
  hashedPassword: string,
  salt: string 
}

export function makeHash(decryptedPassword:string, salt?:string):hashResult {
    if (!salt) {
      salt = crypto.randomBytes(16).toString('base64')
    }
    const saltBuf = new Buffer(salt, 'base64')
    const hashedPassword = crypto.pbkdf2Sync(`${LOCAL_AUTH_SALT}${decryptedPassword}`, saltBuf, 10000, 64)
    return {
        hashedPassword: hashedPassword.toString(),
        salt: salt
    }
}

export function createUser(doc:MEUser):Promise<MEUserModel> {
  return new Promise<MEUserModel>((resolve, reject) => {
    User.create(doc, (err, user) => {
      if (err) {
        reject(err)
        return
      }
      if (!user) {
        reject(new Error('Could not create a new user by some reason'))
        return
      }
      resolve(user)
    })
  })
}

export const localStorategy = new passportLocal.Strategy(
  {
    usernameField: 'email',
    passwordField: 'decryptedPassword',
  },
  (email, decryptedPassword, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) { 
        done(err)
        return
      }
      
      if (!user) {
        done(null, false)
        return
      }
      
      if (!user.verifyPassword(decryptedPassword)) { 
        done(null, false)
        return
      }
      
      done(null, user);
   });
  }
)
