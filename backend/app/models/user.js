'use strict';
const mongoose = require('mongoose');
const local_1 = require('../apis/auth/local');
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    salt: String
});
UserSchema.method('verifyPassword', function (decryptedPassword) {
    const hashResult = local_1.makeHash(decryptedPassword, this.salt);
    return this.password === hashResult.hashedPassword;
});
UserSchema.method('me', function () {
    const me = {
        _id: this._id,
        email: this.email
    };
    return me;
});
exports.User = mongoose.model('User', UserSchema);
