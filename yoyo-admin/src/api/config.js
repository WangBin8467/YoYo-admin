import axios from 'axios';
import qs from "qs";

const instance = axios.create({
  baseURL:'http://localhost:3000', // 本地服务器服务地址
  timeout:10000,  // 10后停止等待响应
})

// http拦截器
instance.interceptors.request.use(config=>{
  if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
    if (typeof(config.data) !== 'string' && config.headers['Content-Type'] !== 'multipart/form-data') {
      config.data = qs.stringify(config.data) // 使用qs对请求参数json序列化
    }
  }
  return config;
},error => {
  Promise.reject(error)
})