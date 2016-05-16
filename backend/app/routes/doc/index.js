'use strict';
const express = require('express');
let router = express.Router();
const controller = require('../../apis/doc/index');
router.get('/', controller.index);
const api_1 = require('./api');
router.use('/api', api_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
