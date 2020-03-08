<template>
  <div>
    <!--表格-->
    <el-table
      :data="shouyi"
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
        prop="money"
        label="金额"
      />
      <el-table-column
        align="center"
        prop="type"
        label="类型"
      />
      <el-table-column
        align="center"
        prop="description"
        label="描述"
      />
      <el-table-column
        align="center"
        prop="userId"
        label="员工ID"
      />
      <el-table-column
        align="center"
        prop="transferAccounts"
        label="凭证"
      >
        <template slot-scope="scope">
          <el-button v-if="scope.row.transferAccounts==null||scope.row.status=='0'" type="text"size="small" @click="uplodeHandler(scope.row)">上传凭证</el-button>
          <el-button v-else type="text"size="small" @click="lookdetails(scope.row.transferAccounts)">查看凭证</el-button>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        fixed="right"
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button v-if="scope.row.status=='1'" type="text"size="small">已审核</el-button>
          <el-button v-else type="text"size="small" @click="examineHandler(scope.row)">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--表格-->
    <!-- 分页 -->
    <el-pagination
      layout="total,prev, pager, next"
      :page-size="this.list.pageSize"
      :total="total1"
      @current-change="changePageNum"
    />
    <!-- 分页 -->
    <!--模态框-->
    <el-dialog title="上传凭证" :visible.sync="dialogFormVisible">
      <el-upload
        class="upload-demo"
        action=" http://134.175.100.63:5588/file/upload"
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitHandler">确 定</el-button>
      </div>
    </el-dialog>
    <!--模态框-->
    <!--查看凭证详情-->
    <el-dialog style="width:1000px;margin-left:250px" title="凭证" :visible.sync="dialogFormVisible1">
      <div class="line"></div>
      <el-image style="width:300px;height:300px;margin-left:80px;margin-top:28px" :src="'http://134.175.100.63:8686/group1/'+this.transferAccounts"></el-image>   
    </el-dialog>
    <!--查看凭证详情-->
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      list: {
        page: 0,
        pageSize: 6,
        type: '提现'
      },
      form:{},
      transferAccounts:'',
      dialogFormVisible: false,
      dialogFormVisible1:false
    }
  },
  created() {
    this.shouWaiter(this.list)
  },
  computed: {
    ...mapState('waiter', ['shouyi', 'total1'])
  },
  methods: {
    ...mapActions('waiter', ['shouWaiter', 'uploadExamine', 'uplode', 'cashExamine']),
    // 上传
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    // 分页
    changePageNum(page) {
      this.list.page = page - 1
      this.shouWaiter(this.list)
    },
    // 上传凭证
    uplodeHandler(list) {
      if (list.status == '0') {
        this.$message({
          showClose: true,
          message: '未审核，请审核',
          type: 'error'
        })
      } else {
        this.dialogFormVisible = true
        this.form=list
      }
    },
    //上传成功关闭模态框
    submitHandler(){
      this.form.transferAccounts=this.transferAccounts
      this.uploadExamine(this.form)
      this.dialogFormVisible=false,
      this.$message({
          showClose: true,
          message: '上传成功',
          type: 'success'
        })
    },
    // 审核
    examineHandler(list) {
      list.status = 1
      // let list={
      //   "description": "itme.description",
      //   "id": "itme.id",
      //   "money": "itme.money",
      //   "status": "1",
      //   "transactionTime": "itme.transactionTime",
      //   "transferAccounts": "itme.transferAccounts",
      //   "type": "itme.type",
      //   "userId": "itme.userId"
      // }
      this.cashExamine(list)
      this.$message({
        showClose: true,
        message: '审核成功',
        type: 'success'
      })
    },
    // 上传成功回调
    successHandler(response, file) {
      this.transferAccounts = response.data.id
    },
    //查看凭证详情
    lookdetails(transferAccounts){
      this.dialogFormVisible1=true
      this.transferAccounts=transferAccounts
    }
  }
}
</script>
<style>
  .line{
    width:499px;
    height:1px;
    background-color:#eee;
    margin-top:-30px;
    margin-left:-20px;
  }
</style>
