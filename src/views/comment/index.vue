<template>
  <el-card>
    <!-- 面包屑组件 -->
    <!-- slot => title是el-card的插槽 -->
        <bread-crumb slote="header">
        <!-- slot =>title 是给面包屑的插槽 -->
          <template slot="title">评论列表</template>
        </bread-crumb>

  </el-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
