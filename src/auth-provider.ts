// 在真是环境中，如果使用了第三方auth服务 不需要改文件
import { User } from './types';
const apiUrl = process.env.REACT_APP_API_URL

const localStroageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStroageKey)

export const handleUserReponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStroageKey, user?.token || '')
  return user
}


export const register = (data: { username: string, password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async response => {
    if (response.ok) {
      return handleUserReponse(await response.json())
    } else {
      return Promise.reject(data)
    }
  })
}

export const login = (data: { username: string, password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(async response => {
    if (response.ok) {
      return handleUserReponse(await response.json())
    } else {
      return Promise.reject(data)
    }
  })
}


export const logout = async () => window.localStorage.removeItem(localStroageKey)

