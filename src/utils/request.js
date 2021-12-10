import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  // 在这里统一注入token
  if (store.getters.token) {
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  // 需求判断当前请求是否成功
  // 成功返回解析后的数据
  // 失败(请求成功，业务失败), 消息提示
  if (success) {
    return data
  } else {
    ElMessage.error(message)
    return Promise.reject(new Error(message))
  }
}, err => {
  ElMessage.error(err.message)
  return Promise.reject(new Error(err.message))
})
console.log('baseUrl', process.env.VUE_APP_BASE_API)
export default service
