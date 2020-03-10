<template>
  <div class="login">
    <div class="header">
      <div class="logo">家</div>
      <div class="title">
        家政服务云平台
        <span style="font-size:.8em">员工端</span>
      </div>
    </div>
    <div class="form">
      <van-cell-group>
        <van-field
          v-model="form.username"
          required
          clearable
          label="用户名"
          icon="question-o"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="form.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <div style="text-align:center;padding:1em" >
       <van-button 
        plain round 
        @click="loginHandler" 
        style="width:100%">登录</van-button>
        <!-- 注册 -->
        <div class="register">
          <button @click="RegisterHandler">
            尚未注册，点击注册
          </button>
        </div>
        <!-- /注册 -->
      </div>     
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      form:{
        type:'waiter'
      }
    }
  },
  methods:{
    ...mapActions("user",["login"]),
    // 跳转注册页面
    RegisterHandler(){
      // alert(1)
      this.$router.push({path:'/register'})
    },
    loginHandler(){
      this.login(this.form)
      .then(()=>{
        //跳转到首页
        this.$router.push({path:'/manager/home'})
      })
    }
  }
}
</script>
<style scoped>
.register{
  margin:1em;
  font-size:12px;
  color:green;
}
.register button{
  border:none
}
.header {
  height: 140px;
  padding: 50px;
  color: #ffffff;
  background-color: #1659a0;
  text-align: center
}
.header .logo {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  border: 1px solid #efefef;
  margin: 0 auto;
  color:#efefef;
  font-weight: bold;
  margin-bottom: 1em;
  font-size: 1.5em
}
.header .title {
  font-size: 24px;
}
</style>