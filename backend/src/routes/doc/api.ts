'use strict'

import * as express from 'express'
import * as env from '../../env'
import * as controller from '../../apis/doc/api'

let router = express.Router()

router.param('id', controller.param)

router.route('/:id')
  .get(controller.read)
  .post(controller.checkBody, controller.create)
  .put(controller.checkBody, controller.update)
  .delete(controller.remove)

export default router