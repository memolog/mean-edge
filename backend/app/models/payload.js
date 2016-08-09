'use strict';
const mongoose = require('mongoose');
const PayloadSchema = new mongoose.Schema({
    expires: {
        type: Date
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
exports.Payload = mongoose.model('Payload', PayloadSchema);
