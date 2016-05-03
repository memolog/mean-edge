'use strict';
var express = require('express');
var router = express.Router();
var controller = require('../../controllers/doc/index');
router.get('/', controller.index);
var api_1 = require('./api');
router.use('/api', api_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
