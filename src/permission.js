// 权限
import router from './router'
//  全局前置守卫
router.beforeEach(function (to, from, next) {
  // 判断拦截的范围
  if (to.path.startsWith('/home')) {
    // 进入到了拦截范围
    // 判断是否登录 有token就是登录 没token就没登录
    let token = window.localStorage.getItem('user-token')// 获取token
    if (token) {
      // 如果有token
      next()
    } else {
      next('/login') // 没有token 就跳转到登录页面
    }
  } else {
    next()// 放行
  }
})

export default router
