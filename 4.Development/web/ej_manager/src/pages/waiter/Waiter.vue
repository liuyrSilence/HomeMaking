<template>
  <div class="waiter">
    <!-- 按钮 -->
    <el-button type="primary" size="small" @click="toAddHandler">添加</el-button>
    <!-- 按钮 -->
    <!-- 表格 -->
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
          <el-button type="text" size="small" @click="deleteHandler(scope.row.id)">删除</el-button>
          <el-button type="text" size="small" @click="editHandler(scope.row)">编辑</el-button>
          <el-button type="text"size="small" @click="detailsHandler(scope.row.id)">详情</el-button>
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
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form ref="ruleForm" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" clearable="true" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="姓名" prop="realname">
          <el-input v-model="form.realname" clearable="true" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号" prop="telephone">
          <el-input v-model="form.telephone" clearable="true" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="身份证号" prop="idCard">
          <el-input v-model="form.idCard" clearable="true" placeholder="请输入身份证号" />
        </el-form-item>
        <el-form-item label="银行卡号" prop="bankCard">
          <el-input v-model="form.bankCard" clearable="true" placeholder="请输入银行卡号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" clearable="true" placeholder="请输入密码" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submit('ruleForm')">确 定</el-button>
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
      title: '添加员工信息',
      form: {},
      ruleForm: {
        username: '',
        realname: '',
        telephone: '',
        idCard: '',
        bankCard: '',
        password: '',
        status: ''
      },
      dialogFormVisible: false,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        realname: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        idCard: [
          { required: true, message: '请输入身份证号', trigger: 'blur' }
        ],
        bankCard: [
          { required: true, message: '请输入银行卡号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    this.queryWaiter(this.list)
  },
  computed: {
    ...mapState('waiter', ['waiters', 'total'])
  },
  methods: {
    ...mapActions('waiter', ['queryWaiter', 'findAllwaiter', 'saveWaiter', 'deleteWaiter']),
    // 去添加，打开模态框
    toAddHandler() {
      this.form = {}
      this.dialogFormVisible = true
    },
    // 关闭模态框
    close(form) {
      this.dialogFormVisible = false
      this.$refs[form].resetFields()
    },
    // 提交保存
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.saveWaiter(this.form)
          this.dialogFormVisible = false
          this.$message({
            showClose: true,
            message: '更新成功',
            type: 'success'
          })
        } else {
          return false
        }
      })
    },
    // 删除员工信息
    deleteHandler(id) {
      this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteWaiter(id)
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
    // 修改员工信息
    editHandler(custermerForm) {
      this.title = '修改员工信息'
      this.form = custermerForm
      this.dialogFormVisible = true
    },
    // 详情页面
    detailsHandler(id) {
      this.$router.push({ name: 'waiterDetails', params: { id: id }})
    },
    // 分页
    changePageNum(page) {
      this.list.page = page - 1
      this.queryWaiter(this.list)
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
