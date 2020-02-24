<template>
  <div class="recharge">
    <briup-fullpagelayout title="充值" @back="backHandler">
        <!-- 充值方式 -->
        <div class="re_money">
            <van-row style="">
                <van-col span="8" >
                    <van-cell title="充值方式" />
                </van-col>
                <van-col span="12">
                    <van-row>
                        <van-col>
                            <van-icon name="after-sale" color="green"/>**银行(6688)</van-col>
                    </van-row>
                    <van-row>
                        <van-col style="font-size:12px;color:#ccc">单日交易限额￥50000.00</van-col>
                    </van-row>
                </van-col>
                <van-col span="4">
                    <van-cell is-link />
                </van-col>
            </van-row>
        </div>
        <!-- /充值方式 -->

        <!-- 充值金额 -->
        <div style="margin:2em">
            <van-cell title="充值金额" />
            <van-row>
                <van-col :span="4">
                    <van-field
                        style="font-size:28px;font-weight:bold;"
                        v-model="value"
                        label="￥"/>
                </van-col>
                <van-col :span="20">
                    <van-field
                        readonly
                        clickable
                        :value="value1"
                        @touchstart.native.stop="show = true"
                        />
                        <van-number-keyboard
                        v-model="value1"
                        :show="show"
                        :maxlength="6"
                        @blur="show = false"
                        />
                </van-col>
            </van-row>
        </div>
        <!-- /充值金额 -->
        <!-- 确认 -->
        <div class="btn" @click="RechargeHandler">
            充值
        </div>
        <!-- /确认 -->
        
    </briup-fullpagelayout>
  </div>
</template>
<script>

import {mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
        value:'',
        value1:'',
        show: false,
    }
  },
  methods:{
    // 充值
    RechargeHandler(){
        alert("充值")
    },
    // 返回我的页面
    backHandler(){
        this.$router.push({path:'/manager/money'})
    },
  },
  computed:{

  }
}
</script>

<style scoped>
.btn {
  background-color: orange;
  color: #fff;
  width: 90%;
  margin: 2em auto;
  line-height: 3em;
  text-align: center;
  border: 1px solid #ededed;
  border-radius: 1.5em;
  font-size: 14px;
}
.re_money{
    background-color:#f1f1f1;
    height:100px;
    padding-top:3em;
}
.re_money .van-cell{
    background-color:#f1f1f1;
}
</style>