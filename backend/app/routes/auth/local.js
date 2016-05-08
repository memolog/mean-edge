'use strict';
const express = require('express');
const cryptico = require('cryptico-js');
const passport = require('passport');
const local_1 = require('../../controllers/auth/local');
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
        res.json({
            token: user.getToken()
        });
        return;
    }
    const email = req && req.body && req.body.email || '';
    const decryptedPassword = req && req.body && req.body.decryptedPassword || '';
    if (!email.length || !decryptedPassword.length) {
        res.status(500);
        next(new Error('Email or password was missed by some reason'));
        return;
    }
    const hashResult = local_1.makeHash(decryptedPassword);
    const userData = {
        email: email,
        password: hashResult.hashedPassword,
        salt: hashResult.salt
    };
    local_1.createUser(userData)
        .then((user) => {
        res.json({
            token: user.getToken()
        });
    })
        .catch((err) => {
        next(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
