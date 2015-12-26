'use strict';
var express = require('express');
var env = require('../env');
var router = express.Router();
var root = env.root;
/*
router.get('/', (req, res, next) => {
  return res.sendFile(root + '/frontend/public/static/index.html');
});
*/
var indexController = require('../controllers/index');
router.get('/', indexController.index);
exports.__esModule = true;
exports["default"] = router;
