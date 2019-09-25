<template>
  <el-card v-loading="loading">
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
              <el-button :style="{color:obj.row.comment_status ? '#E6A23C' : '#409EFF'}" @click="closeOrOpen(obj.row)" size="small" type="text">
                 {{
                   obj.row.comment_status ? "关闭评论" : '打开评论'
                 }}
              </el-button>
            </template>

          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-row type="flex" justify="center" style="margin:20px 0">
          <!-- page-size 是每页多少条 -->
          <el-pagination
            @current-change="changePage"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            background
            layout="prev, pager, next"
            :total="page.total">
          </el-pagination>
        </el-row>

  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      // 专门存放分页信息
      page: {
        total: 0, // 总条数
        currentPage: 1, // 默认第一页
        pageSize: 10
      },
      loading: false // 定义一个变量loading

    }
  },
  methods: {
    changePage (newPage) {
      this.page.currentPage = newPage // 更新最新的页码给currentPage
      this.getComment()
    },
    // 获取评论
    getComment () {
      this.loading = true // 显示遮罩
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize } // params 是路径参数也就是query参数
      }).then(result => {
        this.list = result.data.results // 把返回的数据赋值给list
        this.page.total = result.data.total_count // 把总条数给分页组件的总条数
        this.loading = false // 关闭遮罩
      })
    },
    // filter =>return
    stateFormatter (row, colum, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    // 打开或关闭
    closeOrOpen (row) {
      let mess = row.comment_status ? '关闭' : '打开'// 得到打开或关闭
      this.$confirm(`您确定要${mess}评论吗?`).then(() => {
        this.$axios({
          url: 'comments/status', // 地址
          method: 'put',
          params: { article_id: row.id.toString() }, // 路径参数
          data: { allow_comment: !row.comment_status } // body参数取反 调用状态和当前状态是反着的 所以要取反
        }).then(() => {
          // 成功之后一定会进入点then
          this.getComment() // 重新拉取数据
        })
      })
    }
  },
  // 钩子函数
  created () {
    this.getComment()// 获取第一页 每页十条数据
  }
}
// table使用和过滤提交反了
</script>

<style>

</style>
