<template>
  <div class="money">
    <briup-fullpagelayout title="账户余额" @back="backHandler">
        <!-- 余额显示 -->
        <div class="m_image">
            <van-row type="flex" justify="center">
                <van-col span="3">
                    <van-icon size="45" name="gold-coin" color="orange"/>
                </van-col>
            </van-row>
            <van-row type="flex" justify="center">
                <van-col span="4" style="padding-top:2em;"> 我的零钱</van-col>
            </van-row>
            <van-row type="flex" justify="center">
                <van-col span="7" style="font-size:28px;font-weight:bold"> ￥{{cusInfo.money}} </van-col>
            </van-row>
        </div>
        <!-- /余额显示 -->
        <!-- {{info}} -->
        <!-- 按钮 -->
        <div class="btn" @click="ToRechargeHandler">
            充值
        </div>
        <div class="btn1" @click="ToWithdrawHandler">
            提现
        </div>
        <!-- /按钮 -->

    </briup-fullpagelayout>
  </div>
</template>
<script>

import {mapState, mapActions} from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed:{
    ...mapState('user',['cusInfo','info'])
  },
  created(){
    this.FindCustomerById(this.info.id)
  },
  methods:{
    ...mapActions('user',['FindCustomerById']),
    // 跳转至提现页面
    ToWithdrawHandler(){
        this.$router.push({path:'/manager/withdraw'})
    },
    // 跳转至充值页面
    ToRechargeHandler(){
        this.$router.push({path:'/manager/recharge'})
    },
    // 返回我的页面
    backHandler(){
        this.$router.push({path:'/manager/user'})
    },
  },
  
}
</script>

<style scoped>
.btn {
  background-color: orange;
  color: #fff;
  width: 90%;
  margin: 0 auto;
  margin-top: 15em;
  line-height: 3em;
  text-align: center;
  border: 1px solid #ededed;
  border-radius: 1.5em;
  font-size: 14px;
}
.btn1 {
  background-color: #ededed;
  width: 90%;
  margin: 2em auto;
  line-height: 3em;
  text-align: center;
  border: 1px solid #ededed;
  border-radius: 1.5em;
  font-size: 14px;
}
.m_image{
    margin-top: 4em;
}
</style>