'use strict'

import * as path from 'path'
export const root = path.resolve(__dirname + '/../');
const mongopath = process.env.NODE_ENV === 'production' ? 'mongo' : 'localhost';
export const DB_URL = `mongodb://${mongopath}/meanedge-dev`;

