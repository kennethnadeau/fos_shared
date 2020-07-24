import Axios from 'axios'

export function configure (baseUrl: string) {
  Axios.defaults.baseURL = baseUrl
}

export { default as authService } from './auth'
