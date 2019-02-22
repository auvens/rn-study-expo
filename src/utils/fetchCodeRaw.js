import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default function fetchCodeRaw(url) {
  return service.get('https://raw.githubusercontent.com/auven/rn-study-expo/master/' + url)
}
