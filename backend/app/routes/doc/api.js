'use strict';
var express = require('express');
var controller = require('../../controllers/doc/api');
var router = express.Router();
router.param('id', controller.param);
router.route('/:id')
    .get(controller.read)
    .post(controller.checkBody, controller.create)
    .put(controller.checkBody, controller.update)
    .delete(controller.remove);
exports.__esModule = true;
exports["default"] = router;
