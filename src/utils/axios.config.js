// 1. 负责对axios进行处理
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 将地址的常态值设置给baseUrl
// 请求拦截 请求到达后台之前拦截
// 2.接收
axios.interceptors.request.use(function (config) {
// 在发期请求请做一些业务处理
// config是要发送请求的配置信息
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers['Authorization'] = `Bearer${token}` // 统一注入token 到headers属性因为所有接口要求token格式是一样的
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})
//  响应拦截 响应数据 到达then 方法之前
axios.interceptors.response.use(function (response) {
  // 对响应数据做处理 执行成功是进入
  return response.data
}, function (error) {
  // 执行失败是执行
  return Promise.reject(error)
})
// 导出
// 第一种方式
export default axios
// // 第二种方式
// export default {
//   install (Vue) {
//     Vue.prototype.$axios = axios // 将axios 共享给所有的vue或者组件实例使用
//   }
// }
