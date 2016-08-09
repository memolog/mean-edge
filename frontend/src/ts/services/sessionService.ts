import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http'
import {API_URL} from '../env'
import {Session} from '../models/session'

@Injectable()
export class SessionService {
  private static sharedInstance:Session;

  constructor(private http:Http){ }

  static getSession():Session {
    SessionService.sharedInstance = SessionService.sharedInstance || new Session()
    return SessionService.sharedInstance
  }

  getCSRFToken():Promise<string>{
    return new Promise<string>((resolve, reject) => {
      const session = SessionService.getSession()

      if (session && session._csrf) {
        resolve(session._csrf)
        return
      }

      this.http.get(`${API_URL}/session/csrf`)
        .subscribe((res)=>{
          const data = res.json()
          const csrf = data._csrf;

          if (!csrf) {
            reject(new Error('Could not get CSRF token from the server'))
            return
          }

          session._csrf = csrf
          resolve(session._csrf)
        })
        .unsubscribe()
    })
  }
}
