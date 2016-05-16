'use strict';
const express = require('express');
const cryptico = require('cryptico-js');
const passport = require('passport');
const common_1 = require('../../apis/auth/common');
const local_1 = require('../../apis/auth/local');
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
    if (user) {
        const token = user.getToken();
        common_1.insertTokenInCookie(res, token);
        res.json({
            success: true
        });
        return;
    }
    next(new Error('User is not found'));
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
