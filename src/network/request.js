import axios from 'axios'

export function request(config) {

  const instance = axios.create({

    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000

  })



  // 拦截器--发送拦截
  instance.interceptors.request.use(config => {

    // 发送成功来到这里
    return config;
  }, err => {

    // 发送失败来到这里

    // return config;
  })

  // 拦截器--响应拦截
  instance.interceptors.response.use(res => {

    // 响应成功来到这里
    return res.data

  }, err => {

    // 响应失败来到这里
    // return res.data


  })


  // axios.create...是会默认返回一个Promise的,我们这里return instance()其实就是返回一个promise。
  return instance(config)
  


}