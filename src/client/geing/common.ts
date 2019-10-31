import axios from 'axios'

export const geingInstance = axios.create({
  baseURL: process.env.GEING_BASE_URL || 'http://localhost:9090/'
})
