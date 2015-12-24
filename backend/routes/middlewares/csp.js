'use strict'

var helmet = require('helmet');

var policy = {
  "default-src": "*",
  "script-src": [
    "'self'"
  ],
  "style-src": [
    "'self'"
  ],
  "connect-src": [
    "'self'"
  ],
  "font-src": [
    "'self'"
  ],
  "frame-src": [
    "'self'"
  ]
}

module.exports = helmet.contentSecurityPolicy(policy);
