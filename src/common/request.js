import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import router from '@/router'
const service = axios.create({
  // baseURL: ''
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    let res = response.data
    if (res.code === 401) {
      router.push('/login')
      window.location.href = '/login'
    }
    return response
  },
  error => {
    if (error.response) {
      console.log(error.response)
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          router.replace({
            path: '/login'
          })
          location.reload()
      }
    }
    return Promise.reject(error.response.data)
  }
)

export default service