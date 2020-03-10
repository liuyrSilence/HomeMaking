<template>
    <div class="realname">
        <briup-fulllayout title="实名认证" @back="backHandler">
            <van-cell title="请上传身份证正反面照" size="large" />
            <van-uploader v-model="fileList" max-count="2" :after-read="afterRead" />
            <!-- 验证 -->
            <div class="btn" @click="RealnameHandler">
                验证
            </div>
            <!-- 验证 -->
        </briup-fulllayout>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
    data() {
        return {
            fileList: [],
            photo:[],
            formData:[]
        }
    },
    computed: {
        ...mapState('user',['info']),
        ...mapState('realname',['waiterrealname'])
    },
    created() {

    },
    methods: {
        ...mapActions('realname',['WaiterRealname']),
        // 实名验证
        RealnameHandler(){
            this.params = {
                user_id:this.info.id
            }
            axios.post('http://134.175.100.63:5588/user/realname?user_id='+this.info.id, this.formData)
            .then(res => { 
                Toast.success(res.data);　　　　
        　　});
            // 此时不需要再调用一次接口
            // this.WaiterRealname(this.params)
        },
        afterRead(file) {
            //构造一个 FormData，把后台需要发送的参数添加
            this.formData = new FormData(); 
            //接口需要传的参数
            this.photo.push(file)
            this.photo.map((item,index)=>{
                if(index == 0){
                    this.formData.append('file1',item.file)
                }
                if(index == 1){
                    this.formData.append('file2',item.file)
                }
            })
            console.log(this.formData.getAll('file1'),'file1')
            console.log(this.formData.getAll('file2'),'file2')
        },
        // 返回到我的页面
        backHandler(){
            this.$router.push({path:'./user'})
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