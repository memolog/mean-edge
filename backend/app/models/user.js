'use strict';
const mongoose = require('mongoose');
const local_1 = require('../apis/auth/local');
const jwt = require('jsonwebtoken');
const env_1 = require('../env');
const ObjectId = mongoose.Types.ObjectId;
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    salt: String
});
UserSchema.method('verifyPassword', function (decryptedPassword) {
    const hashResult = local_1.makeHash(decryptedPassword, this.salt);
    return this.password === hashResult.hashedPassword;
});
UserSchema.method('getToken', function () {
    const payload = {
        _id: this._id,
        expired: new Date(Date.now() + 86400000)
    };
    return jwt.sign(payload, env_1.TOKEN_SECRET);
});
UserSchema.method('me', function () {
    const me = {
        email: this.email
    };
    return me;
});
exports.User = mongoose.model('User', UserSchema);
