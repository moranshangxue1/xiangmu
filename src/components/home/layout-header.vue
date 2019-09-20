<template>
<!-- 头部最外侧放置一个<ei-row></ei-row> -->
  <el-row class='layout-header' type="flex" align="middle" justify="space-between">
    <!-- 左侧 -->
    <el-col :span="12">
      <i class="el-icon-s-unfold"></i>
      <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="6">
      <img class="head-img" src="../../assets/img/avatar.jpg" alt="">
       <!-- 下拉菜单菜单组件 el-dropdown-->
      <el-dropdown trigger="click">
       <!-- 匿名插槽 -->
        <span class="el-dropdown-link">

        83期同学<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <!-- 具名插槽 dropdown -->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang="less" scopd>
 .layout-header {
   height: 50px;
    .el-icon-s-unfold {
    font-size: 22px;
  }
  .title {
    vertical-align: top;
    margin-left: 4px;
  }
  .head-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 4px;
      vertical-align: middle;
  }
 }
</style>
