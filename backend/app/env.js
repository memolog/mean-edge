'use strict';
var path = require('path');
exports.root = path.resolve(__dirname + '/../../');
exports.DB_URL = 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/meanedge-dev';
