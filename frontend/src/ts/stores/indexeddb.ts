import {UserService} from '../services/userService'
import {User} from '../models/user'

export const INDEXEDDB_NAME = 'mean-edge'
export const INDEXEDDB_VERSION = 1
export const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
export const IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
export const IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

let sharedIDBInstance:IDBDatabase

export declare type IDBStoreName = "users"
export declare type IDBTransactionAvailableMode = 'readwrite' | 'readonly'

export function openIDB(): Promise<any> {
  return new Promise((resolve, reject) => {
    const request:IDBOpenDBRequest =indexedDB.open(INDEXEDDB_NAME, INDEXEDDB_VERSION)
    request.onsuccess = () => {
      sharedIDBInstance = request.result
      resolve()
    }
    request.onerror = () => {
      reject(request.error)
    }
    request.onupgradeneeded = (event) => {
      const oldVersion:number = event.oldVersion
      const newVersion:number = event.newVersion
      const db:IDBDatabase = request.result
      User.createObjectStore(db);
    }
  });
}

export function getObjectStore(storeName:IDBStoreName, mode:IDBTransactionAvailableMode="readonly"):IDBObjectStore {
    if (!sharedIDBInstance) {
      throw new Error('You must open indexedDB before')
    }
    const tx = sharedIDBInstance.transaction(storeName, mode)
    return tx.objectStore(storeName)
}

