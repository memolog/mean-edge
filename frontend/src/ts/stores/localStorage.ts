export type LocalStorageKey = "authenticatedUser"

export function getItem(key:LocalStorageKey) {
  return localStorage.getItem(key)
}

export function setItem(key:LocalStorageKey, data:string) {
  return localStorage.setItem(key, data)
}
