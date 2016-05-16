import {User} from '../../models/user'
import * as Promise from 'bluebird'
import {MEUserModel} from '../../models/user.d'

export function me(req, res, next){
  const userId = req && req.token && req.token._id
  if (!userId) {
    res.status(401)
    next(new Error('Unauthorized'))
    return
  }
  
  const findById = Promise.promisify(User.findById)
  findById(userId)
    .then(function(user:MEUserModel){
      res.status(200)
      res.json({
        user: user.me()
      })
    })
    .catch(function(err){
      res.status(500)
      next(err)
    })
}