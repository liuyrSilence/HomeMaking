<template>
  <div class="comment">
    <!-- 按钮 -->

    <!-- 按钮 -->
    <!-- 表格 -->
    <el-table
      :data="comments"
      stripe
      style="width: 100%"
    >
      <el-table-column
        align="center"
        prop="id"
        label="编号"
        width="80"
      />
      <el-table-column
        align="center"
        prop="content"
        label="评论内容"
      />
      <el-table-column
        align="center"
        prop="commentTime"
        label="评论时间"
      />
      <el-table-column
        align="center"
        prop="orderId"
        label="产品ID"
      />
      <el-table-column
        align="center"
        prop="status"
        label="状态"
      />
      <el-table-column
        align="center"
        fixed="right"
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="deleteHandler(scope.row.id)">删除</el-button>
          <el-button v-if="scope.row.status=='审核不通过'" type="text" size="mini" @click="passHandler(scope.row.id)">通过审核</el-button>
          <el-button v-else type="text" size="mini" @click="refuseHandler(scope.row.id)">拒绝审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格 -->
    <!-- 分页 -->
    <el-pagination
      layout="total,prev, pager, next"
      :page-size="this.list.pageSize"
      :total="total"
      @current-change="changePageNum"
    />
    <!-- 分页 -->
    <!-- 模态框 -->

    <!-- 模态框 -->
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      list: {
        page: 0,
        pageSize: 6
      }
    }
  },
  created() {
    this.queryProduct(this.list)
  },
  computed: {
    ...mapState('comment', ['comments', 'total'])
  },
  methods: {
    ...mapActions('comment', ['findComment', 'deleteComment', 'queryProduct', 'passComment', 'refuseComent']),
    // 删除评论
    deleteHandler(id) {
      this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteComment(id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 分页
    changePageNum(page) {
      this.list.page = page - 1
      this.queryProduct(this.list)
    },
    // 通过审核
    passHandler(id) {
      this.passComment(id)
    },
    // 拒绝审核
    refuseHandler(id) {
      this.refuseComent(id)
    }
  }
}
</script>
<style scoped>
.select{
    margin-left: 5em;
    margin-top: -2em;
}
</style>
