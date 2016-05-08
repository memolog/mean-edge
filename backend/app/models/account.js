'use strict';
const mongoose = require('mongoose');
var AccountSchema = new mongoose.Schema({
    email: String,
    password: String
});
mongoose.model('Account', AccountSchema);
