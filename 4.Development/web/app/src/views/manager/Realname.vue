<template>
  <div class="register">
    <briup-fullpagelayout title="实名认证" @back="backHandler">
        <van-cell title="请上传身份证正面照" size="large" />
        <van-uploader :after-read="afterRead" />
        <van-cell title="请上传身份证反面照" size="large" />
        <van-uploader :after-read="afterRead" />
        <!-- 验证 -->
        <div class="btn" @click="RealnameHandler">
        验证
        </div>
        <!-- 验证 -->
       {{info}}
       
    </briup-fullpagelayout>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import { Toast } from 'vant';
import axios from 'axios'

export default {
    data() {
    return {
        user_id:''
    };
  },
  computed: {
     ...mapState('user',['info']),
     ...mapState('realname',['cusrealname'])
  },
  methods:{
    ...mapActions('realname',['CusomterRealname']),
    // 实名验证
    RealnameHandler(){
        this.params = {
            user_id:this.info.id
        }
        // console.log(this.params)
        this.CusomterRealname(this.params)
        Toast.success('验证成功');
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
    //   构造一个FormData,
    var formData = new FormData();
    formData.append('file1',file.file);
    formData.append('file2',file.file);
    axios.post('http://134.175.100.63:5588/user/realname?user_id=183',formData)
    .then(res => {
        console.log(res.data)
    })
    //   console.log(file);
    },
    // 返回我的页面
    backHandler(){
        this.$router.push({path:'/manager/user'})
    }
  }
}
</script>
<style scoped>
    .btn {
  background-color: #ededed;
  width: 90%;
  margin: 2em auto;
  line-height: 3em;
  text-align: center;
  border: 1px solid #ededed;
  border-radius: 1.5em;
  font-size: 14px;
}
</style>