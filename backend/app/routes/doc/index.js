'use strict';
var express = require('express');
var env = require('../../env');
var router = express.Router();
var root = env.root;
var controller = require('../../controllers/doc/index');
router.get('/', controller.index);
var api_1 = require('./api');
router.use('/api', api_1["default"]);
exports.__esModule = true;
exports["default"] = router;
