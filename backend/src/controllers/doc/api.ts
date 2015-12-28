import * as express from 'express';
import * as mongoose from 'mongoose';
import * as _ from 'lodash';

var Doc = mongoose.model('Doc');

export function param(req:express.Request, res:express.Response, next:Function, id:string){
  Doc
    .findById(id)
    .exec()
    .then(function onFulfill(doc){
      req.doc = doc;
      return next();
    })
    .then(null, function onReject(err){
      return next(err);
    });
}

export function checkBody(req:express.Request, res:express.Response, next:Function){
  var data = req.body && req.body.doc;
  if (!data || !_.isPlainObject(data)) {
    res.status(400);
    return next(new Error("Data required"));
  }
  return next();  
}

export function create(req:express.Request, res:express.Response, next:Function){
  var data = req.body.data;
  Doc
    .create(data)
    .then(function onFulfill(doc){
      return res.json({
        doc: doc
      });
    })
    .then(null, function onReject(err){
      return next(err);
    });
}

export function read(req:express.Request, res:express.Response, next:Function){
  return res.json({
    doc: req.doc
  });
}

export function update(req:express.Request, res:express.Response, next:Function){
  var data = req.body.data;
  var doc = req.doc as mongoose.Document;
  doc.set(data);
  doc.save(function(err){
    if (err) {
      return next(err);
    }
    return res.json({
      doc: doc
    });
  });
}

export function remove(req:express.Request, res:express.Response, next:Function){
  var doc = req.doc as mongoose.Document;
  doc.remove(function(err){
    if (err) {
      return next(err);
    }
    return res.json({
      success: true
    });
  });
}
