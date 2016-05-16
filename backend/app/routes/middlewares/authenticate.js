'use strict';
const express = require('express');
const env_1 = require('../../env');
const jwt = require('express-jwt');
let router = express.Router();
router.route('/').all(jwt({ secret: env_1.TOKEN_SECRET, requestProperty: 'token', getToken(req) {
        return req.signedCookies && req.signedCookies.token || '';
    } }), function (req, res, next) {
    if (!req.token) {
        res.status(401);
        next(new Error('Unauthorized'));
        return;
    }
    next();
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
