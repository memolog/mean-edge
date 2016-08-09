import {User} from '../../models/user'
import * as Promise from 'bluebird'
import {MEUserModel} from '../../models/user.d'

export function me(req, res, next){
  const userId = req && req.token && req.token.user
  if (!userId) {
    res.status(401)
    next(new Error('Unauthorized'))
    return
  }

  User.findById(userId, function(err, user:MEUserModel){
    if (err) {
      res.status(500)
      next(err)
      return
    }
    res.status(200)
    res.json({
      user: user.me()
    });
  })
}
