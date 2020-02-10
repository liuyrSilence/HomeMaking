<template>
  <div class="user">
    <div class="header">
      <div class="photo">
        <img src="../../assets/user.png" alt=""/>
      </div>
      <div class="name">您好，{{info.name}}</div>
    </div>
    <!-- 余额 -->
    <div class="money">
      <div class="left">
        <p class="one" style="font-size:18px">账户余额</p>
        <p class="two" style="font-size:24px;color:red">￥888.00</p>
      </div>
      <div class="right">充值</div>
    </div>
    <!-- /余额 -->
    <!-- 常用地址 -->
    <van-cell icon="location-o" size="large" title="常用地址" is-link to="address" />
    <!-- /常用地址 -->
    
    <!-- 联系我们 -->
    <van-cell icon="phone-o" size="large" title="联系我们" @click="show = true" />
    <van-overlay :show="show" @click="show = false"  >
      <div class="wrapper" @click.stop>
        <div class="block">
          <van-cell title="联系我们" size="large" >
          <van-icon
            @click="closeModal()"
            slot="right-icon"
            name="cross"
            style="line-height: inherit;" />
          </van-cell>
          <van-cell title="0471-1234-888" />
        </div>
      </div>
    </van-overlay>
    <!-- /联系我们 -->

    <!-- 退出登录 -->
    <div class="btn" @click="logoutHandler">
      退出
    </div>
    <!-- /退出登录 -->
  </div>
</template>
<script>

import {mapState, mapActions} from 'vuex'
import Vue from 'vue';
import { Overlay } from 'vant';
Vue.use(Overlay);

export default {
  data() {
    return {
      show: false
    }
  },
  methods:{
    ...mapActions('user',['logout']),
    // 关闭联系我们模态框
    closeModal(){
      this.show = false
    },
    toAddressHandler(){
      // this.$router.push({path:'/manager/address'})
    },
    logoutHandler(){
      this.logout()
      .then(()=>{
        this.$router.push({path:'/login'})
      })
    }
  },
  computed:{
    ...mapState("user",["info"])
  }
}
</script>

<style scoped>
.money::after{
  clear:both;
  content:'';
  display:block
}
.money{
  padding: 0 6em;
  border: 1px solid #ccc;
  margin: 2em;
  border-radius: 10px;
}
.money .left{
  float: left;
  /* width:150px; */
  /* line-height:120px; */
  text-align: center;
}
.money .right{
  float: right;
  /* width:150px; */
  line-height:120px;
  text-align: center;
  font-size:24px;
  color: red;
  /* border-left: 1px solid #ccc */

}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 240px;
  height: 120px;
  background-color: #fff;
}
.header {
  padding-top: 46px;
  text-align: center;
  /* background: #1659a0; */
  margin-bottom: 2em;
}
.header .photo {
  margin: 0 auto;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  box-sizing: border-box;
  border:1px solid #ccc;
  overflow:hidden;
  padding: 1em;
}
.header .name {
  margin: 0 auto;
  width:200px;
  margin-top: 2em;
  line-height: 3em;
  font-size: 16px;
  border:1px solid #ccc;
  border-radius: 10px;
}
.header .photo img {
 width: 100%;
 border-radius: 50%;
}
.btn {
  background-color: #ededed;
  width: 90%;
  margin: 2em auto;
  line-height: 3em;
  text-align: center;
  border: 1px solid #ededed;
  border-radius: 1.5em;
  font-size: 16px;
}

</style>