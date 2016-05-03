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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = helmet.contentSecurityPolicy(policy);
