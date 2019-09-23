// 实现整体组件的同意注册
import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
export default {
  install: function (Vue) {
    // 调用install 方法 传入了vue 对象
    // 可不可以在实例化之前注册组件
    Vue.component('layout-aside', layoutAside) // 全局注册左侧导航组件
    Vue.component('layout-header', layoutHeader) // 全局注册头部组件
  }
}
