<template>
  <div>
    <el-table
      :data="waiters"
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
        prop="realname"
        label="姓名"
      />
      <el-table-column
        align="center"
        prop="telephone"
        label="手机号"
      />
      <el-table-column
        align="center"
        prop="idCard"
        label="身份证号"
      />
      <el-table-column
        align="center"
        prop="bankCard"
        label="银行卡号"
      />
      <el-table-column
        align="center"
        prop="registerTime"
        label="注册时间"
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
          <el-button type="text"size="small" @click="examineHandler(scope.row.id)">审核</el-button>
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
    <el-dialog title="审核员工" :visible.sync="dialogFormVisible">
      <p>用户名：{{ this.waiter_id.username }}</p>
      <p class="idcard">身份证号：{{ this.waiter_id.idCard }}</p>
      <div class="left">
        <p>身份证正面照</p>
        <img width="250" height="120" :src="'http://134.175.100.63:8686/'+this.waiter_id.idcardPhotoPositive">
      </div>
      <div class="right">
        <p>身份证反面照</p>
        <img width="250" height="120" :src="'http://134.175.100.63:8686/'+this.waiter_id.idcardPhotoNegative">
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit">审核通过</el-button>
        <el-button type="danger" @click="refuseHandler">拒绝审核</el-button>
      </div>
    </el-dialog>
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
      },
      dialogFormVisible: false
    }
  },
  created() {
    this.queryWaiter(this.list)
  },
  computed: {
    ...mapState('waiter', ['waiters', 'total', 'waiter_id'])
  },
  methods: {
    ...mapActions('waiter', ['queryWaiter', 'findwaiterById', 'saveWaiter', 'refuseWaiter', 'passWaiter']),
    // 分页
    changePageNum(page) {
      this.list.page = page - 1
      this.queryWaiter(this.list)
    },
    // 检查员工信息审核员工
    examineHandler(id) {
      this.dialogFormVisible = true
      this.findwaiterById(id)
    },
    // 拒绝审核
    refuseHandler() {
      const list = {
        id: this.waiter_id.id
      }
      this.refuseWaiter(list)
      this.$message({
        showClose: true,
        message: '拒绝成功',
        type: 'success'
      })
      this.dialogFormVisible = false
    },
    // 审核
    submit() {
      const list = {
        id: this.waiter_id.id,
        img1: this.waiter_id.idcardPhotoPositive,
        img2: this.waiter_id.idcardPhotoNegative
      }
      this.passWaiter(list)
      this.dialogFormVisible = false
      this.$message({
        showClose: true,
        message: '审核成功',
        type: 'success'
      })
      this.queryWaiter(this.list)
    }
  }
}
</script>
<style>
.left{
  margin-top:35px;
}
.right{
  float: right;
  margin-left:100px;
  margin-top:-168px;
}
.idcard{
  margin-left:394px;
  margin-top:-30px;
}
</style>
