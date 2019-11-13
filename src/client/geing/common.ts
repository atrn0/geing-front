import axios from 'axios'

export const geingInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:8080/'
})
