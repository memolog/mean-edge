'use strict';
var express = require('express');
var env = require('../env');
var router = express.Router();
var root = env.root;
var indexController = require('../controllers/index');
var index_1 = require('./doc/index');
router.get('', indexController.index);
router.use('doc', index_1["default"]);
exports.__esModule = true;
exports["default"] = router;
