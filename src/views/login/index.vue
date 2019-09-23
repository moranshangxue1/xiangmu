<template>
  <div class='login'>
     <el-card class="login-card">
         <!-- 匿名插槽 -->
         <div class="title">
             <img src="../../assets/img/logo_index.png" alt="">
         </div>
         <!-- 表单=> el-form包裹 -->
         <!-- 根据校验 =>el-form 绑定model 还需要绑定rules -->
         <el-form ref="myForm" :model="LoginForm" :rules="loginRules" style="margin-top:20px">
             <!-- 每一个表单域由一个 Form-Item 组件构成 -->
             <!-- from-item prop 属性 绑定表单组件的字段名 -->
             <el-form-item prop="mobile">
                 <!-- 表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker -->
                 <!-- 手机号 -->
                 <el-input v-model="LoginForm.mobile" placeholder="请输入手机号"></el-input>
             </el-form-item>
             <el-form-item prop="code">
                 <!-- 雅正吗 -->
                 <el-input v-model="LoginForm.code" placeholder="请输入验证码" style="width:65%"></el-input>
                 <!--发送验证码 -->
                 <el-button  style="float:right">发送验证码</el-button>
             </el-form-item>
             <el-form-item prop="agree">
                 <!-- 同意选项 -->
                 <el-checkbox v-model="LoginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
             </el-form-item>
             <el-form-item>
                 <!-- 登录按钮 -->
                 <!-- 注册点击事件 -->
                 <el-button @click="login" type="primary" style="width:100%">登录</el-button>
             </el-form-item>
         </el-form>
     </el-card>
  </div>
</template>

<script>
export default {
  data () {
    let validator = function (rul, value, callBack) {
      // rule当前规则
      // value当前表单项的值
      // callback 回调函数
      // 正常写法
    //   if (value) {
    //     // 正确 勾选了协议
    //     callBack() // 一切OK请继续
    //   } else {
    //     // 不对 没勾选协议
    //     callBack(new Error('您必须同意无条件被我们蒙骗'))
    //   }
      value ? callBack() : callBack(new Error('您必须同意无条件被我们骗'))// 炫技模式
    }
    return {
      //  表单里面是一个对象
      LoginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意
      },
      loginRules: {
        //   决定着校验规则  key(字段名):value(对象数组) => 一个对象就是一个校验规则
        // required 为true 就表示该字段必填 如果不填 就会提示消息
        mobile: [{ required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }],
        code: [{ required: true, message: '请输入您的验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' } ],
        agree: [{ validator }]
      } // 登录规则集合对象
    }// 自定义形式去校验
  },
  methods: {
    login () {
      //  检验整个表单规则
      //  validata 是一个方法 => 方法中传入一个函数 两个校验参数 是否校验成功/未校验成功的字段

      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          // 只有一切的校验痛过之后 才会进行请求
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.LoginForm
          }).then(result => {
            // 将后台返回的taken令牌存储到前端缓存中
            window.localStorage.setItem('user-token', result.data.token)
            this.$router.push('/home') // 跳转到主页
            // catch抛出的信息
          }).catch(() => {
            //   提示消息 失败请求
            this.$message({
              type: 'warning',
              message: '您的手机号或者验证码错误'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>//意思的标志是这个style 里面可以写less
// 如果要在组件的样式中写less 要给lang属性，lang="less"
// 如果加了scoped属性，那么该组件就对当前组件有效
.login {
    background-image: url('../../assets/img/login_bg.jpg');
    height: 100vh;
    background-size: cover;
    // 使用display:flex布局
    display: flex;
    // 水平居中
    justify-content: center;
    //垂直居中
    align-items: center;
    .login-card {
        width:440px;
        height: 340px;
    }
}
</style>
