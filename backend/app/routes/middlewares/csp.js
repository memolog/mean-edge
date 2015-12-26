'use strict';
var helmet = require('helmet');
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
};
exports.__esModule = true;
exports["default"] = helmet.contentSecurityPolicy(policy);
