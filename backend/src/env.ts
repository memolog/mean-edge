'use strict'

import * as path from 'path'
export const root = path.resolve(__dirname + '/../../');
export const DB_URL = 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || 'localhost') + '/meanedge-dev';