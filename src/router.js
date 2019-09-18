import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/home/index.vue' // 路由级组件  完整写法
import Home from './views/home/'
import Login from './views/login'

Vue.use(Router)

export default new Router({
  // 一级路由
  routes: [{
    path: '/', // 强制推到home下
    redirect: '/home'

  },
  // 首页路由
  {
    path: '/home',
    component: Home
  },
  // 登录路由
  {
    path: '/login',
    component: Login
  }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
