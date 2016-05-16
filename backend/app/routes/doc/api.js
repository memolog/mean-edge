'use strict';
const express = require('express');
const controller = require('../../apis/doc/api');
let router = express.Router();
router.param('id', controller.param);
router.route('/:id')
    .get(controller.read)
    .post(controller.checkBody, controller.create)
    .put(controller.checkBody, controller.update)
    .delete(controller.remove);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
