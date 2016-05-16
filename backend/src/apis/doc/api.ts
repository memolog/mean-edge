import * as mongoose from 'mongoose';
var Doc = mongoose.model('Doc');

export function param(req, res, next, id:string){
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

export function checkBody(req, res, next){
  var data = req.body && req.body.doc;
  if (!data) {
    res.status(400);
    return next(new Error("Data required"));
  }
  return next();  
}

export function create(req, res, next){
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

export function read(req, res, next){
  return res.json({
    doc: req.doc
  });
}

export function update(req, res, next){
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

export function remove(req, res, next){
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
