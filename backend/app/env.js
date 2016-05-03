'use strict';
var path = require('path');
exports.root = path.resolve(__dirname + '/../');
var mongopath = process.env.NODE_ENV === 'production' ? 'mongo' : 'localhost';
exports.DB_URL = "mongodb://" + mongopath + "/meanedge-dev";
