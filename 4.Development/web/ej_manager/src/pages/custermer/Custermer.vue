<template>
  <div class="custermer">
    <!-- 按钮 -->
    <el-button type="primary" size="small" @click="toAddHandler">添加</el-button>
    <!--<el-button type="danger" size="small" @click='bacthDeletehandler'>批量</el-button>-->
    <div class="select">
      <el-input v-model="list.status" clearable="true" placeholder="请输入状态" />
      <div class="btn">
        <el-button type="primary" size="small" @click="submitHanlderbyStatus">查询</el-button>
      </div>
    </div>
    <!-- 按钮 -->
    <!-- 表格 -->
    <el-table
      :data="custermers"
      stripe
      style="width: 100%"
    >
      <el-table-column
        align="center"
        prop="id"
        label="编号"
        width="80px"
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
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" clearable="true" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="form.status" placeholder="请选择状态">
            <el-option label="禁用" value="禁用" />
            <el-option label="启用" value="启用" />
          </el-select>
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
      title: '添加顾客信息',
      form: {},
      ruleForm: {
        username: '',
        realname: '',
        telephone: '',
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
    this.queryCustermer(this.list)
  },
  computed: {
    ...mapState('custermer', ['custermers', 'total'])
  },
  methods: {
    ...mapActions('custermer', ['findAllcustermer', 'saveCustermer', 'deleteCustermer', 'queryCustermer']),
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
          this.saveCustermer(this.form)
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
    // 删除顾客信息
    deleteHandler(id) {
      this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteCustermer(id)
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
    // 修改顾客信息
    editHandler(custermerForm) {
      this.title = '修改顾客信息'
      this.form = custermerForm
      this.dialogFormVisible = true
    },
    // 详情页面
    detailsHandler(id) {
      this.$router.push({ name: 'details', params: { id: id }})
    },
    // 分页
    changePageNum(page) {
      this.list.page = page - 1
      this.queryCustermer(this.list)
    },
    // 模糊查询
    submitHanlderbyStatus() {
      this.queryCustermer(this.list)
    },
    // 批量删除
    bacthDeletehandler() {

    }
  }
}
</script>
<style scoped>
.select{
    width:200px;
    margin-left: 5em;
    margin-top: -2em;
    margin-bottom:1em;
}
.btn{
    margin-left: 13em;
    margin-top: -34px;
}
</style>
