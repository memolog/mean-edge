"use strict";
const user_1 = require('../../models/user');
const Promise = require('bluebird');
function me(req, res, next) {
    const userId = req && req.token && req.token._id;
    if (!userId) {
        res.status(401);
        next(new Error('Unauthorized'));
        return;
    }
    const findById = Promise.promisify(user_1.User.findById);
    findById(userId)
        .then(function (user) {
        res.status(200);
        res.json({
            user: user.me()
        });
    })
        .catch(function (err) {
        res.status(500);
        next(err);
    });
}
exports.me = me;
