'use strict';
const express = require('express');
const cryptico = require('cryptico-js');
const passport = require('passport');
const common_1 = require('../../apis/auth/common');
const local_1 = require('../../apis/auth/local');
const payload_1 = require('../../models/payload');
const jwt = require('jsonwebtoken');
const env_1 = require('../../env');
let router = express.Router();
router.route('/signin')
    .post((req, res, next) => {
    try {
        const password = req && req.body && req.body.password || '';
        if (!password.length) {
            res.status(400);
            return next(new Error('Password required'));
        }
        req.body.decryptedPassword = local_1.decrypt(password);
        next();
    }
    catch (err) {
        res.status(500);
        next(err);
    }
}, passport.authenticate('local'), (req, res, next) => {
    const user = req && req.user || null;
    if (!user) {
        next(new Error('User is not found'));
        return;
    }
    payload_1.Payload.create({
        user: user._id,
        expires: new Date(Date.now() + 1209600000) // 2 weeks
    }, function (err, payload) {
        if (err) {
            next(err);
            return;
        }
        const payloadObject = payload.toObject();
        jwt.sign(payloadObject, env_1.TOKEN_SECRET, {}, function (err, token) {
            if (err) {
                next(err);
                return;
            }
            common_1.insertTokenInCookie(res, token);
            res.json({
                success: true
            });
        });
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
