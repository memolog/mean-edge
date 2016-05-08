"use strict";
const cryptico = require('cryptico-js');
const env_1 = require('../../env');
const passportLocal = require('passport-local');
const user_1 = require('../../models/user');
const crypto = require('crypto');
const Promise = require('bluebird');
function decrypt(cipher) {
    const ret = cryptico.decrypt(cipher, env_1.RSA_Key);
    if (ret.status !== 'success') {
        throw new Error('Could not decrypt');
    }
    return ret.plaintext;
}
exports.decrypt = decrypt;
function makeHash(decryptedPassword, salt) {
    if (!salt) {
        salt = crypto.randomBytes(16).toString('base64');
    }
    const saltBuf = new Buffer(salt, 'base64');
    const hashedPassword = crypto.pbkdf2Sync(`${env_1.LOCAL_AUTH_SALT}${decryptedPassword}`, saltBuf, 10000, 64);
    return {
        hashedPassword: hashedPassword.toString(),
        salt: salt
    };
}
exports.makeHash = makeHash;
function createUser(doc) {
    return new Promise((resolve, reject) => {
        user_1.User.create(doc, (err, user) => {
            if (err) {
                reject(err);
                return;
            }
            if (!user) {
                reject(new Error('Could not create a new user by some reason'));
                return;
            }
            resolve(user);
        });
    });
}
exports.createUser = createUser;
exports.localStorategy = new passportLocal.Strategy({
    usernameField: 'email',
    passwordField: 'decryptedPassword',
}, (email, decryptedPassword, done) => {
    user_1.User.findOne({ email: email }, (err, user) => {
        if (err) {
            done(err);
            return;
        }
        if (!user) {
            done(null, false);
            return;
        }
        if (!user.verifyPassword(decryptedPassword)) {
            done(null, false);
            return;
        }
        done(null, user);
    });
});
