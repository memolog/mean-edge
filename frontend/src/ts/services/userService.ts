import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http'
import {API_URL} from '../env'
import {User} from '../models/user'
import {IDBStoreName, getObjectStore} from '../stores/indexeddb'
import {getItem, setItem} from '../stores/localStorage'

const storeName: IDBStoreName = "users"
export declare type UserOrNull = User | null

@Injectable()
export class UserService {
  private static sharedInstance:User;

  constructor(private http:Http){ }

  static getUser():UserOrNull {
    return UserService.sharedInstance || null
  }

  static setUser(user:User){
    UserService.sharedInstance = user
    setItem('authenticatedUser', user._id)
  }

  addToIndexedDB(user:User):Promise<User>{
    return new Promise<User>((resolve, reject) => {
      const objectStore = getObjectStore(storeName, "readwrite")
      try {
        const req = objectStore.add(user)
        req.onsuccess = (event) => {
          resolve(user)
        }
        req.onerror = () => {
          reject(req.error)
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  static getUserFromIndexedDB(_id:string):Promise<UserOrNull> {
    return new Promise<UserOrNull>((resolve, reject)=>{
      const storeName: IDBStoreName = "users"
      const objectStore = getObjectStore(storeName)
      try {
        const req = objectStore.get(_id)
        req.onsuccess = (event) => {
          const result = req && req.result || {}
          const _id = result && result._id
          const email = result && result.email

          if (!_id || !email){
            resolve(null)
            return
          }

          const user = new User(result)
          resolve(user)
        }
        req.onerror = (event) => {
          reject(req.error)
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  static getStoredAuthenticatedUser():Promise<UserOrNull>{
    return new Promise<UserOrNull>((resolve, reject) => {
      const _id = getItem('authenticatedUser')
      if (!_id) {
        resolve(null)
        return
      }
      UserService.getUserFromIndexedDB(_id)
        .then((user:UserOrNull) => {
          if (user) {
            UserService.setUser(user)
          }
          resolve(user)
        })
        .catch((error)=>{
          reject(error)
        })
    })
  }

  getAuthenticatedUser():Promise<User>{
    return new Promise<User>((resolve, reject) => {
      if (UserService.sharedInstance) {
        resolve(UserService.sharedInstance)
        return
      }

      this.http.get(`${API_URL}/users/me`)
        .subscribe((res)=>{
          const data = res.json()
          const userData = data.user;
          const _id = userData && userData._id
          const email = userData && userData.email

          if (!_id || !email) {
            reject(new Error('Could not get authenticated user from the server'))
            return
          }

          UserService.getUserFromIndexedDB(_id)
            .then((user:User) => {
              if (user) {
                UserService.setUser(user)
                resolve(UserService.sharedInstance)
                return
              }

              this.addToIndexedDB(userData)
                .then((user) => {
                  UserService.setUser(user)
                  resolve(UserService.sharedInstance)
                })
                .catch((error) => {
                  reject(error)
                })
            })
            .catch((error) => {
              reject(error)
            })
        })
        // .unsubscribe()
    })
  }
}
