<template>
  <el-card>
    <!-- 面包屑组件 -->
    <!-- slot => title是el-card的插槽 -->
        <bread-crumb slote="header">
        <!-- slot =>title 是给面包屑的插槽 -->
          <template slot="title"></template>
        </bread-crumb>
        <!-- el-table表格 data属性是一个对此昂数组-->
        <el-table :data="list">
          <!-- el-table-column 列  属性prop 键名 =>字段名 lable表头 =>-->
          <el-table-column width="600px" label="标题" prop="title"></el-table-column>
          <el-table-column :formatter="stateFormatter" align="center" label="评论状态" prop="comment_status"></el-table-column>
          <el-table-column align="center" label="总评论数" prop="total_comment_count"></el-table-column>
          <el-table-column align="center" label="粉丝评论数" prop="fans_comment_count"></el-table-column>
          <el-table-column align="center" label="操作" >
            <!-- 作用域插槽 接收  el-table-column row/column/$index/store-->
            <template slot-scope="obj">
              <el-button size="small" type="text">修改</el-button>
              <el-button size="small" type="text">
                 {{
                   obj.row.comment_status ? "关闭评论" : "打开评论"
                 }}
              </el-button>
            </template>

          </el-table-column>
        </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [{}]
    }
  },
  methods: {
    // 获取评论
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' } // params 是路径参数也就是query参数
      }).then(result => {
        this.list = result.data.results // 把返回的数据赋值给list
      })
    },
    // filter =>return
    stateFormatter (row, colum, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  // 钩子函数
  created () {
    this.getComment()
  }
}
// table使用和过滤提交反了
</script>

<style>

</style>
