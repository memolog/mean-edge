export interface User {
  _id:string
  email:string
}

export class User {

  static createObjectStore(db:IDBDatabase){
      var userObjectStore = db.createObjectStore('users', { keyPath: "_id" })
      userObjectStore.createIndex('email', 'email', {unique: true})
      userObjectStore.createIndex('_id', '_id', {unique: true})
  }

  constructor(data:User){
    this._id = data._id
    this.email = data.email
    if (!this._id || !this.email) {
      throw new Error('_id and email are required')
    }
  }
}

