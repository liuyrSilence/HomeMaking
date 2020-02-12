<template>
    <div class="waiter">
        <!-- 按钮 -->
        <el-button type="primary" size="small" @click='toAddHandler'>添加</el-button>
        <!-- 按钮 -->
        <!-- 表格 -->
        <el-table
        :data="waiters"
        stripe
        style="width: 100%">
        <el-table-column
        prop="id"
        label="编号"
        width="80">
        </el-table-column>
        <el-table-column
        align='center'
        prop="realname"
        label="姓名"
        width="130">
        </el-table-column>
        <el-table-column
        align='center'
        prop="telephone"
        label="手机号">
        </el-table-column>
        <el-table-column
        prop="idCard"
        label="身份证号">
        </el-table-column>
        <el-table-column
        prop="bankCard"
        label="银行卡号">
        </el-table-column>
        <el-table-column
        prop="registerTime"
        label="注册时间">
        </el-table-column>
        <el-table-column
        prop="status"
        label="状态">
        </el-table-column>
        <el-table-column
        align='center'
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
            <el-button @click="deleteHandler(scope.row.id)" type="text" size="small">删除</el-button>
            <el-button @click="editHandler(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="detailsHandler(scope.row.id)"type="text" size="small">详情</el-button>
        </template>
        </el-table-column>
        </el-table>
        <!-- 表格 -->
        <!-- 分页 -->
        
        <!-- 分页 -->
        <!-- 模态框 -->
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
            <el-form-item label="用户名" prop='username'>
            <el-input v-model="form.username" clearable=true placeholder='请输入用户名'></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop='realname'>
            <el-input v-model="form.realname" clearable=true placeholder='请输入姓名'></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop='telephone'>
            <el-input v-model="form.telephone" clearable=true placeholder='请输入手机号'></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop='idCard'>
            <el-input v-model="form.idCard" clearable=true placeholder='请输入身份证号'></el-input>
            </el-form-item>
            <el-form-item label="银行卡号" prop='bankCard'>
            <el-input v-model="form.bankCard" clearable=true placeholder='请输入银行卡号'></el-input>
            </el-form-item>
            <el-form-item label="密码" prop='password'>
            <el-input type="password" v-model="form.password" clearable=true placeholder='请输入密码'></el-input>
            </el-form-item>
            <el-form-item label="状态" prop='status'>
            <el-select v-model="form.status" placeholder="请选择活动区域">
                <el-option label="禁用" value="禁用"></el-option>
                <el-option label="启用" value="启用"></el-option>
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
            title:'添加员工信息',
            form:{},
            ruleForm:{
                username:'',
                realname:'',
                telephone:'',
                idCard:'',
                bankCard:'',
                password:'',
                status:''
            },
            dialogFormVisible:false,
            rules: {
            username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
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
            ],
            }
        }
    },
    created(){
        this.findAllwaiter()
    },
    computed:{
        ...mapState('waiter',['waiters'])
    },
    methods:{
        ...mapActions('waiter',['findAllwaiter','saveWaiter','deleteWaiter']),
        //去添加，打开模态框
        toAddHandler(){
            this.form={}
            this.dialogFormVisible=true
        },
        //关闭模态框
        close(form){
            this.dialogFormVisible=false 
            this.$refs[form].resetFields()
        },
        //提交保存
        submit(form){
            this.$refs[form].validate((valid) => {
            if (valid) {
                this.saveWaiter(this.form)
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
        //删除员工信息
        deleteHandler(id){
            this.deleteWaiter(id)
            this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
            });
        },
        //修改员工信息
        editHandler(custermerForm){
            this.title='修改员工信息'
            this.form=custermerForm
            this.dialogFormVisible=true
        },
        //详情页面
        detailsHandler(id){
            this.$router.push({name:'waiterDetails',params:{id:id}})
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