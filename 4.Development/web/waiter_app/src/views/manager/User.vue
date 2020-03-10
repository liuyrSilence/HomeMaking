<template>
  <div class="user">
    <!-- 标题 -->
    <div class="title">
      <van-nav-bar title="我的" />
    </div>
    <!-- /标题 -->
    <!-- 头像信息 -->
    <div class="header">
      <div class="photo">
        <img src="../../assets/user.png" alt=""/>
      </div>
      <div class="name">您好，{{info.name}}</div>
    </div>
    <!-- /头像信息 -->

    <!-- 实名认证 -->
    <van-cell icon="manager-o" title="实名认证" is-link to="realname" />
    <!-- /实名认证 -->

    <!-- 我的收入 -->
    <van-cell icon="gold-coin-o" title="我的收入" :value="IncomeTotal" is-link to="income_list" />
    <!-- /我的收入 -->

    <!-- 我的订单 -->
    <!-- <van-cell icon="orders-o" title="我的订单" is-link to="myorder" /> -->
    <!-- /我的订单 -->

    <div class="btn" @click="logoutHandler">
      退出
    </div>
    <!-- {{info}} -->
  </div>
</template>
<script>
import {mapState, mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  created() {
    this.EarningWaiter(this.info.id)
    // 员工详细信息
    this.WaiterById(this.info.id)
  },
  methods:{
    ...mapActions('user',['logout','EarningWaiter','WaiterById']),
    // 退出登录
    logoutHandler(){
      this.logout()
      .then(()=>{
        this.$router.push({path:'/login'})
      })
    }
  },
  computed:{
    ...mapState("user",['earn',"info"]),
    ...mapGetters('user',['IncomeTotal'])
  }
}
</script>

<style scoped>
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
  margin-top: 1.5em;
  line-height: 3em;
  font-size: 14px;
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
  font-size: 14px;
}

</style>