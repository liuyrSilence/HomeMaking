<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <div class="title">
      <van-row>
        <van-col span="4">
          <van-icon size="30" @click="CloseHome" style="padding:16px" name="cross" color="#333333"/>
        </van-col>
        <van-col :offset="2" span="18" style="font-size:20px;color:#333333;padding:16px;text-align:left">e洁家政服务平台</van-col>
      </van-row>
    </div>
    <!-- /顶部导航栏 -->
    <!-- 佣金余额 -->
    <!-- <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" :text="IncomeTotal" to="./income_list" />
      <van-grid-item icon="search" text="我的余额" to="" />
    </van-grid> -->
    
      <van-row>
        <van-col :span="12">
          <div class="income">
            <div class="income_one">收益金额</div>
            <div class="income_two">{{IncomeTotal}} 元</div>
          </div>
        </van-col>
        <van-col :span="12">
          <div class="income">
            <div class="income_one">我的金额</div>
            <div class="income_two">{{waiterInfo.money}} 元</div>
          </div>
        </van-col>
      </van-row>
    <!-- /佣金余额 -->
    <!-- 员工信息 -->
    <van-cell-group>
      <van-field
        v-model="waiterInfo.username"
        label="会员名"
        left-icon="smile-o"
        placeholder="显示图标"
      />
      <van-field
        v-model="waiterInfo.realname"
        clearable
        label="真实姓名"
        left-icon="music-o"
        placeholder="显示清除图标"
      />
      <van-field
        v-model="waiterInfo.telephone"
        clearable
        label="联系方式"
        left-icon="music-o"
        placeholder="显示清除图标"
      />
      <van-field
        v-model="waiterInfo.idCard"
        clearable
        label="身份证号"
        left-icon="music-o"
        placeholder="显示清除图标"
      />
      <van-field
        v-model="waiterInfo.bankCard"
        clearable
        label="银行卡号"
        left-icon="music-o"
        placeholder="显示清除图标"
      />
    </van-cell-group>
    <van-cell-group>
      <van-row>
        <van-col :span="12">
          <van-field
            v-model="waiterInfo.province"
            clearable
            label="地址"
            left-icon="music-o"
            placeholder="省份"
          />
        </van-col>
        <van-col :span="6">
          <van-field
            v-model="waiterInfo.city"
            clearable
            placeholder="城市"
          />
        </van-col>
        <van-col :span="6">
          <van-field
            v-model="waiterInfo.area"
            clearable
            placeholder="区域"
          />
        </van-col>
      </van-row>
    </van-cell-group>
    <!-- /员工信息 -->
    <div class="btn" @click="SaveWaiterHandler">
        修改
    </div>
    <!-- {{earn}} -->
    <!-- {{waiterInfo}} -->
  </div>
</template>

<script>
import {mapActions,mapGetters,mapState} from 'vuex'
export default {
  data() {
    return {
  
    }
  },
  created() {
    this.EarningWaiter(this.info.id)
    // 员工详细信息
    // console.log(this.info.id)
    this.WaiterById(this.info.id)
  },
  computed: {
    ...mapState('user',['info','earn','waiterInfo']),
    ...mapGetters('user',['IncomeTotal'])
  },
  methods: {
    ...mapActions('user',['EarningWaiter','WaiterById','UpdateWaiter']),
    // 修改员工信息
    SaveWaiterHandler(){
      this.params = {
        id:this.info.id,
        type:'waiter',
        password:this.waiterInfo.password,
        money:this.waiterInfo.money,
        username:this.waiterInfo.username,
        realname:this.waiterInfo.realname,
        telephone:this.waiterInfo.telephone,
        idCard:this.waiterInfo.idCard,
        bankCard:this.waiterInfo.bankCard,
        province:this.waiterInfo.province,
        city:this.waiterInfo.city,
        area:this.waiterInfo.area,
      }
      // console.log(this.params)
      this.UpdateWaiter(this.params)
      .then(res=>{
        // console.log(this.info.id)
        this.WaiterById(this.info.id)
      })
    },
    // 返回到登录页面
    CloseHome(){
      this.$router.push({path:'/login'})
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
.income_one{
  font-size: 18px;
}
.income{
  background: orange;
  padding: 1em;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
}
.home {
  padding-bottom: 50px;
}
.header {
  height: 300px;
  overflow: hidden;
}
.header img {
  width: 100%;
}
</style>