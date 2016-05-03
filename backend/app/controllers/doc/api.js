"use strict";
var mongoose = require('mongoose');
var _ = require('lodash');
var Doc = mongoose.model('Doc');
function param(req, res, next, id) {
    Doc
        .findById(id)
        .exec()
        .then(function onFulfill(doc) {
        req.doc = doc;
        return next();
    })
        .then(null, function onReject(err) {
        return next(err);
    });
}
exports.param = param;
function checkBody(req, res, next) {
    var data = req.body && req.body.doc;
    if (!data || !_.isPlainObject(data)) {
        res.status(400);
        return next(new Error("Data required"));
    }
    return next();
}
exports.checkBody = checkBody;
function create(req, res, next) {
    var data = req.body.data;
    Doc
        .create(data)
        .then(function onFulfill(doc) {
        return res.json({
            doc: doc
        });
    })
        .then(null, function onReject(err) {
        return next(err);
    });
}
exports.create = create;
function read(req, res, next) {
    return res.json({
        doc: req.doc
    });
}
exports.read = read;
function update(req, res, next) {
    var data = req.body.data;
    var doc = req.doc;
    doc.set(data);
    doc.save(function (err) {
        if (err) {
            return next(err);
        }
        return res.json({
            doc: doc
        });
    });
}
exports.update = update;
function remove(req, res, next) {
    var doc = req.doc;
    doc.remove(function (err) {
        if (err) {
            return next(err);
        }
        return res.json({
            success: true
        });
    });
}
exports.remove = remove;
