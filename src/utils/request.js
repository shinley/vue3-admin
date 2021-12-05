import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
console.log('baseUrl', process.env.VUE_APP_BASE_API)
export default service
