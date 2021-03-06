'use strict';
const path = require('path');
const cryptico = require('cryptico-js');
exports.root = path.resolve(__dirname + '/../../');
const mongopath = process.env.NODE_ENV === 'production' ? 'mongo' : 'localhost';
exports.DB_URL = `mongodb://${mongopath}/meanedge-dev`;
exports.PRIVATE_KEY_PHRASE = process.env.PRIVATE_KEY_PHRASE || 'no-secret';
exports.RSA_Key = cryptico.generateRSAKey(exports.PRIVATE_KEY_PHRASE, 1024);
exports.TOKEN_SECRET = process.env.TOKEN_SECRET || 'no-secret';
exports.LOCAL_AUTH_SALT = process.env.LOCAL_AUTH_SALT || 'no-secret-salt';
exports.PORT = process.env.PORT || 3000;
exports.COOKIE_SECRET = process.env.COOKIE_SECRET || 'no-secret-cookie';
exports.COOKIE_PATH = process.env.COOKIE_PATH || '/';
