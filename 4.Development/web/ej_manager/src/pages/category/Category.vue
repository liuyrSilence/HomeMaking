<template>
    <div class="category">
        <!-- 按钮 -->
        <el-button type="primary" size="small" @click='toAddHandler'>添加</el-button>
        <div class="select">
            <el-input  v-model="list.name" clearable=true placeholder='请输入栏目名称'></el-input>
            <div class='btn'>
            <el-button type="primary" @click="submitHanlderbyStatus" size="small">查询</el-button>
            </div>
        </div>
        <!-- 按钮 -->
        <!-- 表格 -->
        <el-table
        :data="categorys"
        stripe
        style="width: 100%">
        <el-table-column
        align='center'
        prop="id"
        label="编号"
        width="80">
        </el-table-column>
        <el-table-column
        align='center'
        prop="name"
        label="栏目名称">
        </el-table-column>
        <el-table-column
        align='center'
        prop="num"
        label="序号">
        </el-table-column>
        <el-table-column
        align='center'
        prop="parentId"
        label="父栏目">
        </el-table-column>
        <el-table-column
        align='center'
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
            <el-button @click="deleteHandler(scope.row.id)" type="text" size="small">删除</el-button>
            <el-button @click="editHandler(scope.row)" type="text" size="small">编辑</el-button>
        </template>
        </el-table-column>
        </el-table>
        <!-- 表格 -->
        <!-- 分页 -->
        <el-pagination
            layout="total,prev, pager, next"
            @current-change="changePageNum"
            :page-size="this.list.pageSize"
            :total="total">
        </el-pagination>
        <!-- 分页 -->
        <!-- 模态框 -->
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
            <el-form-item label="栏目名称" prop='name'>
            <el-input v-model="form.name" clearable=true placeholder='请输入栏目名称'></el-input>
            </el-form-item>
            <el-form-item label="序号" prop='num'>
            <el-input v-model="form.num" clearable=true placeholder='请输入序号'></el-input>
            </el-form-item>
            <el-form-item label="所属栏目" prop='parentId'>
            <el-select  v-model="form.parentId" placeholder="请选择所属栏目">
                <el-option v-for='c in categorys' :label="c.id" :value="c.id" :key="c.id"></el-option>
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
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            list:{
                page:0,
                pageSize:6
            },
            title:'添加栏目信息',
            dialogFormVisible:false,
            form:{},
            categoryForm:{
                page:1,
                pageSize:9
            },
            ruleForm:{
                name:'',
                num:'',
                parentId:'',
            },
            rules: {
            name: [
                { required: true, message: '请输入栏目名称', trigger: 'blur' },
            ],
            num: [
                { required: true, message: '请输入序号', trigger: 'blur' }
            ],
            parentId: [
                { required: true, message: '请选择所属栏目', trigger: 'blur' }
            ],
            }
        }
    },
    created() {
        this.queryCategory(this.list)
    },
    computed: {
        ...mapState('category',['categorys','total']),
    },
    methods: {
        ...mapActions('category',['queryCategory','findAllcategory','saveCategory','deleteCategory','searchCategoryById']),
        //添加打开模态框
        toAddHandler(){
            this.form={}
            this.dialogFormVisible=true
        },
        //取消关闭模态框
        close(form){
            this.dialogFormVisible=false
            this.$refs[form].resetFields()
        },
        //提交保存
        submit(form){
            this.$refs[form].validate((valid) => {
            if (valid) {
                this.saveCategory(this.form)
                this.dialogFormVisible=false
                this.$message({
                showClose: true,
                message: '更新成功',
                type: 'success'
                });
            } else {
                return false;
            }
            });
        },
        //删除栏目信息
        deleteHandler(id){
             this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.deleteCategory(id)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        },
         //修改订单信息
        editHandler(custermerForm){
            this.title='修改栏目信息'
            this.form=custermerForm
            this.dialogFormVisible=true
        },
        //详情页面
        detailsHandler(id){
            this.$router.push({name:'productDetails',params:{id:id}})
        },
        //根据栏目名称查询
        searchHandler(){
            this.searchCategoryById(this.categoryForm)
        },
        //分页
        changePageNum(page){
                this.list.page = page-1;
                this.queryCategory(this.list)
        },
        //模糊查询
        submitHanlderbyStatus(){
            this.queryCategory(this.list)
        }
    },
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