<template>
  <div class="register">
    <briup-fullpagelayout title="注册" @back="backHandler">
        <!-- 手机号、验证码 -->
        <div class="register_t">
            <van-field
                left-icon="phone-o"
                v-model="tel"
                label="手机号"
                placeholder="请输入用户名"/>
            <van-field
                left-icon="chat-o"
                v-model="password"
                center
                clearable
                label="密码"
                placeholder="请输入密码">
            </van-field>
        </div>
        <!-- /手机号、验证码 -->
        <div style="text-align:center;padding:1em" >
            <van-button 
                type="info"
                round 
                @click="backHandler" 
                style="width:100%">完成注册
            </van-button>
        </div>
    </briup-fullpagelayout>
  </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    data() {
    return {
        password:'',
        tel:''
    };
  },
  methods:{
    // 返回登录页面
    backHandler(){
        this.$router.push({path:'/login'})
    }
  }
}
</script>
<style scoped>
    .register_t{
        margin-top:3em;
    }
</style>