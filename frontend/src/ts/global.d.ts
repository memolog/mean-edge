interface System {
  import(module: string): any
}
declare var System: System

interface Window {
  shimIndexedDB: {
    __useShim: () => {}
    __debug: (boolean) => {}
  }
  mozIndexedDB: any
  webkitIndexedDB: any
  msIndexedDB: any
  IDBTransaction: any
  webkitIDBTransaction: any
  msIDBTransaction: any
  IDBKeyRange: any
  webkitIDBKeyRange: any
  msIDBKeyRange: any
  cryptico: any
}

declare const cryptico: any

interface Navigator {
  serviceWorker: any
}
