"use strict";
const user_1 = require('../../models/user');
function me(req, res, next) {
    const userId = req && req.token && req.token.user;
    if (!userId) {
        res.status(401);
        next(new Error('Unauthorized'));
        return;
    }
    user_1.User.findById(userId, function (err, user) {
        if (err) {
            res.status(500);
            next(err);
            return;
        }
        res.status(200);
        res.json({
            user: user.me()
        });
    });
}
exports.me = me;
