'use strict';
var express = require('express');
var env = require('../env');
var router = express.Router();
var root = env.root;
router.get('/', function (req, res, next) {
    return res.sendFile(root + '/frontend/public/static/index.html');
});
exports.__esModule = true;
exports["default"] = router;
