<template>
<!-- separator 分隔符的意思 -->
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>
      <!-- 定义一个插槽 -->
      <slot name="title"></slot>
  </el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
