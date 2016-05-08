"use strict";
const cryptico = require('cryptico-js');
const env_1 = require('../../env');
function sendPublicKey(req, res, next) {
    res.json({
        publicKey: cryptico.publicKeyString(env_1.RSA_Key)
    });
}
exports.sendPublicKey = sendPublicKey;
