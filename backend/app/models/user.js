'use strict';
const mongoose = require('mongoose');
const local_1 = require('../controllers/auth/local');
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
        id: this._id,
        expired: new Date(Date.now() + 86400000)
    };
    return jwt.sign(payload, env_1.TOKEN_SECRET);
});
exports.User = mongoose.model('User', UserSchema);
