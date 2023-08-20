import axios from 'axios'
import { getCookie } from './cookiesActions'

const { VITE_API_BASE_URL } = import.meta.env

const _httpClient = axios.create({
  baseURL: VITE_API_BASE_URL
})

_httpClient.interceptors.request.use((config) => {
  if (!config.url.includes('login')) {
    config.headers.Authorization = `Bearer ${getCookie('_auth_token')}`
  }

  return config
})

export function parseJwt (token) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

export { _httpClient }
