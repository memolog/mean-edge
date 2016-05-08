'use strict';
const express = require('express');
const common_1 = require('../../controllers/auth/common');
const local_1 = require('./local');
const router = express.Router();
router.use('/key', common_1.sendPublicKey);
router.use('/local', local_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
