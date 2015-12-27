'use strict'

import * as mongoose from 'mongoose'

var DocSchema = new mongoose.Schema({
  title: String,
  ISBN: String,
  created: {
    type: Date,
    'default': Date.now
  },
  modified: {
    type: Date,
    'default': Date.now
  }
});

DocSchema.index({
  modified: 1
});

DocSchema.index({
  created: 1
});

DocSchema.set('autoIndex', true);

mongoose.model('Doc', DocSchema);