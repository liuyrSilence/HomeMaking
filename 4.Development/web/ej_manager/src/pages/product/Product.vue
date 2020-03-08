<template>
  <div class="product">
    <!-- 按钮 -->
    <el-button type="primary" size="small" @click="toAddHandler">添加</el-button>
    <div class="select">
      <el-input v-model="list.name" clearable="true" placeholder="请输入产品名称" />
      <div class="btn">
        <el-button type="primary" size="small" @click="submitHanlderbyStatus">查询</el-button>
      </div>
    </div>
    <!-- 按钮 -->
    <!-- 表格 -->
    <el-table
      :data="products"
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
        prop="name"
        label="产品名称"
      />
      <el-table-column
        align="center"
        prop="price"
        label="价格"
      />
      <el-table-column
        align="center"
        prop="description"
        label="产品描述"
      />
      <el-table-column
        align="center"
        prop="categoryId"
        label="所属产品"
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
          <el-button type="text"size="small" @click="detailsHandler(scope.row)">详情</el-button>
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
        <el-form-item label="产品名称" prop="name">
          <el-input v-model="form.name" clearable="true" placeholder="请输入产品名称" />
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="form.price" clearable="true" placeholder="请输入价格" />
        </el-form-item>
        <el-form-item label="所属栏目" prop="categoryId">
          <el-select v-model="form.categoryId" placeholder="请选择所属栏目">
            <el-option v-for="c in categorys" :key="c.id" :label="c.id" :value="c.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="介绍" prop="description">
          <el-input v-model="form.description" type="textarea" clearable="true" placeholder="请输入产品介绍" />
        </el-form-item>
        <div class="upload">
          <el-upload
            class="upload-demo"
            action="http://134.175.100.63:5588/file/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="successHandler"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
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
      title: '添加产品信息',
      dialogFormVisible: false,
      form: {},
      categoryForm: {},
      ruleForm: {
        name: '',
        price: '',
        category: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入产品名称', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'blur' }
        ],
        categoryId: [
          { required: true, message: '请选择所属栏目', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.queryProduct(this.list),
    this.findAllcategory()
  },
  computed: {
    ...mapState('product', ['products', 'total']),
    ...mapState('category', ['categorys'])
  },
  methods: {
    ...mapActions('product', ['findAllproduct', 'saveProduct', 'deleteProduct', 'queryProduct']),
    ...mapActions('category', ['findAllcategory']),
    // 添加打开模态框
    toAddHandler() {
      this.form = {}
      this.dialogFormVisible = true
    },
    // 取消关闭模态框
    close(form) {
      this.dialogFormVisible = false
      this.$refs[form].resetFields()
    },
    // 提交保存
    submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.saveProduct(this.form)
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
    // 删除订单信息
    deleteHandler(id) {
      this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteProduct(id)
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
    // 修改订单信息
    editHandler(custermerForm) {
      this.title = '修改订单信息'
      this.form = custermerForm
      this.dialogFormVisible = true
    },
    // 详情页面
    detailsHandler(id) {
      this.$router.push({ name: 'productDetails', params: { id: id }})
    },
    // 分页
    changePageNum(page) {
      this.list.page = page - 1
      this.queryProduct(this.list)
    },
    // 模糊查询
    submitHanlderbyStatus() {
      this.queryProduct(this.list)
    },
    // 上传成功回调
    successHandler(response, file) {
      this.form.photo = response.data.id
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
.upload{
    margin-left:9em;
}
</style>
