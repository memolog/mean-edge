"use strict";
const cryptico = require('cryptico-js');
const env_1 = require('../../env');
function sendPublicKey(req, res, next) {
    res.json({
        publicKey: cryptico.publicKeyString(env_1.RSA_Key)
    });
}
exports.sendPublicKey = sendPublicKey;
function insertTokenInCookie(res, token) {
    const expires = new Date(Date.now() + 1209600000);
    res.cookie('token', token, {
        path: env_1.COOKIE_PATH,
        expires: expires,
        secure: false,
        httpOnly: true,
        signed: true
    });
}
exports.insertTokenInCookie = insertTokenInCookie;
