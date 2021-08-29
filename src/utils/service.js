import axios from 'axios'
//基础配置
import { baseUrl } from '@/config'

import { Toast } from 'vant'

let service = axios.create({
    baseURL: baseUrl, // url = base api url + request url
    timeout: 5000 // request timeout
})
// 请求拦截
let loading;
service.interceptors.request.use(config => {
    loading = Toast.loading({
        message: '加载中...',
        forbidClick: true,
    });
    // config.headers['Authorization'] = sessionStorage.getItem('token')
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
})
// 响应拦截器
service.interceptors.response.use(res => {
    Toast.clear()
    return Promise.resolve(res||'error')
}, error => {
    Toast.clear()
    console.log('err'+error)
    return Promise.reject(error)
})
export default service