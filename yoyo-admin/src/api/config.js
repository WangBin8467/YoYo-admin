import axios from 'axios';
import qs from "qs";

const instance = axios.create({
  baseURL:'http://localhost:3000', // 本地服务器服务地址
  timeout:10000,  // 10后停止等待响应
})

// http请求拦截器
instance.interceptors.request.use(config=>{
  if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
    if (typeof(config.data) !== 'string' && config.headers['Content-Type'] !== 'multipart/form-data') {
      config.data = qs.stringify(config.data) // 使用qs对请求参数json序列化
    }
  }
  return config;
},error => {
  return Promise.reject(error)
})

// http响应拦截器
instance.interceptors.response.use(response=>{
  console.log(response);
  const res =response.data
  if (res.code===200){
    return res.result
  }else{
    return res
  }
},error => {
  return Promise.reject(error)
})

// get请求
export function get(url,params) {
  return instance.get(url,{
    params:params
  })
}

// post请求
export function post(url,data,params) {
  return instance.post(url,data,params)
}

// put 请求
export function put(url, data, params) {
  return instance.put(url, data, params)
}

// delete 请求
export function del(url, data) {
  return instance.delete(url, data)
}