<template>
<!-- 先定义一个大的容器 -->
 <el-container>
   <!-- 2.放置一个左侧 -->
   <el-aside style="width:200px;overflow:hidden;background-color:#323745;">
     <!-- 3.使用左侧导航组件 -->
     <layout-aside></layout-aside>
   </el-aside>
   <!-- 4.右侧大容器 -->
   <el-container>
     <!-- 头部 -->
     <el-header>
       <!-- 头部组件 -->
       <layout-header></layout-header>
     </el-header>
     <!-- 中部区域 -->
     <el-main style="padding:0">
       <!-- 二级路由容器 -->
       <router-view></router-view>
     </el-main>
   </el-container>
 </el-container>
</template>

<script>
//  引入组件
// import layoutAside from '../../components/home/layout-aside'
// import layoutHeader from '../../components/home/layout-header'

export default {
  // // 注册
  // components: {
  //   'layout-aside': layoutAside,
  //   'layout-header': layoutHeader
  // }

}
</script>

<style>

</style>
