import Vue from 'vue'
import App from './App.vue'
import router from './permission' // 引入组件
import ElementUI from 'element-ui'
import Component from './components' // 引入插件对象
import axios from './utils/axios.config'
// 替换
// import axios from 'axios'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less'
// 移入到axios.config.js中
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 将地址的常态值设置给baseUrl
// 第一种方式
Vue.prototype.$axios = axios // 将axios 共享给所有的vue或者组件实例使用
Vue.config.productionTip = false
Vue.use(ElementUI) // 相当于全局注册elementUI  Vue.use => 干了什么?
Vue.use(Component) // 注册插件
// 第二种方式 使用注册
// Vue.use(axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
