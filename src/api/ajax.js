/* ajax 请求模块
返回值 promise对象 ； 异步返回的数据是response.data */
import axios from 'axios'
// import { resolve, reject } from 'core-js/fn/promise'
export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    /* 执行ajax异步请求 */
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr) {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    /* 成功了调用resolve，失败了调用reject */
    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}

/* 想要实现的效果
const response = await ajax()
const result = response.data
-----
const result = await ajax()
*/
