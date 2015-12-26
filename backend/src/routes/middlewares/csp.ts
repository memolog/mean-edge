'use strict'

var helmet = require('helmet')

var policy = {
  "default-src": "*",
  "script-src": [
    "'unsafe-eval'",
    "'self'"
  ],
  "style-src": [
    "'unsafe-inline'",
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

export default helmet.contentSecurityPolicy(policy)
