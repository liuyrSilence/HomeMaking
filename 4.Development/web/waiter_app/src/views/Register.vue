<template>
    <div class="register">
        <briup-fulllayout title="注册页面" @back="backHandler">
            <!-- 手机号、验证码 -->
            <div class="register_t">
                <van-field
                    left-icon="phone-o"
                    v-model="telephone"
                    label="手机号"
                    placeholder="请输入手机号"/>
                <van-field
                    left-icon="comment-circle-o"
                    v-model="vcode"
                    label="验证码"
                    placeholder="请输入验证码">
                    <van-button slot="button" size="small" type="info" @click="GainVcode">发送验证码</van-button>
                </van-field>
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
            <!-- 注册 -->
            <div style="text-align:center;padding:1em" >
                <van-button 
                    type="info"
                    round 
                    @click="backHandler" 
                    style="width:100%">完成注册
                </van-button>
            </div>
            <!-- 注册 -->
        </briup-fulllayout>
    </div>
</template>

<script>
import { mapActions , mapState } from 'vuex'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
    data() {
        return{
            telephone:'',
            password:'',
            vcode:'',
            param:{
                telephone:this.telephone
            }
        }
    },
    created() {

    },
    computed: {
        ...mapState('register',['vercode','waiterInfo'])
    },
    methods: {
        ...mapActions('register',['GetWaiterVcode','WaiterRegister']),
        // 获取验证码
        GainVcode(){
            Toast('验证码已发送');
            this.GetWaiterVcode({telephone:this.telephone})
        },
        // 返回登录页面并且完后注册
        backHandler(){
            // 完成注册
            this.obj = {
                telephone:this.telephone,
                vcode:this.vcode,
                password:this.password
            }
            this.WaiterRegister(this.obj)
            this.$router.push({path:'/login'})
            Toast('完成注册，请登录')
        }
    }
}
</script>