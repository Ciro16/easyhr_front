export function setCookie (name, value, expirationTime) {
  return (document.cookie = `${name}=${value};expires=${expirationTime.toUTCString()}`)
}

export function getCookie (name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)

  if (parts.length === 2) {
    return parts.pop().split(';').shift()
  }
}

export function deleteCookie (name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

export function isCookieSet (name) {
  return !!getCookie(name)
}
