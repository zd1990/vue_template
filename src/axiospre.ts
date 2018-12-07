/**
 * Created by Administrator on 2017/11/7.
 */
import axios from 'axios'
import {Loading, Message} from 'element-ui'
// 超时时间
axios.defaults.timeout = 30000
// http请求拦截器
declare let loadinginstace:any 
declare let tList:[any]


axios.interceptors.request.use(config => {
  // element ui Loading方法
  tList.push(setTimeout(() => {
    loadinginstace = Loading.service({fullscreen: true})
  }, 300))
  return config
}, error => {
  loadinginstace.close()
  Message.error(error)
  return Promise.reject(error)
})


// http响应拦截器
axios.interceptors.response.use(data => {      // 响应成功关闭loading
  clearTimeout(tList.pop())
  try {
    loadinginstace.close()
  } catch (err) {
      console.log(err)
  }
  return data
}, error => {
  clearTimeout(tList.pop())
  loadinginstace.close()
  Message.error(error)
  return Promise.reject(error)
})

export default axios
