<template>
    <div class="withdraw">
        <briup-fulllayout title="提现申请" @back="backHandler">
            <!-- 充值方式 -->
            <div class="d_money">
                <van-row style="">
                    <van-col span="8" >
                        <van-cell title="到账银行卡" />
                    </van-col>
                    <van-col span="12">
                        <van-row>
                            <van-col>
                                <van-icon name="after-sale" color="green"/>**银行({{waiterInfo.bankCard}})</van-col>
                        </van-row>
                        <van-row>
                            <van-col style="font-size:12px;color:#ccc">2小时内到账</van-col>
                        </van-row>
                    </van-col>
                    <van-col span="4">
                        <!-- <van-cell is-link /> -->
                    </van-col>
                </van-row>
            </div>
            <!-- /充值方式 -->
            <!-- 充值金额 -->
            <div style="margin:2em">
                <van-cell title="到账金额" />
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
                <!-- 全部提现 -->
                <van-row>
                    <van-col :span="12">
                        <div style="font-size:12px;color:#ccc;margin-left:2em">当前零钱余额为{{IncomeTotal}}</div>
                    </van-col>
                    <van-col :span="6">
                        <!-- <div style="font-size:12px;color:blue;margin-left:2em">全部提现</div>    -->
                    </van-col>
                </van-row>
            </div>
            <!-- /充值金额 -->
            <!-- 确认 -->
            <div class="btn1" @click="WithdrawHandler">
                提现
            </div>
            <!-- /确认 -->
            {{waiterInfo}}
        </briup-fulllayout>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
    data() {
        return {
            value:'',
            value1:'',
            show: false,
        }
    },
    computed:{
        ...mapState("user",['earn',"info",'waiterInfo']),
        ...mapGetters('user',['IncomeTotal']),
        ...mapState('income',['cash'])
    },  
    created() {
        this.EarningWaiter(this.info.id)
        // 员工详细信息
        this.WaiterById(this.info.id)
    },
    methods:{
        ...mapActions('user',['logout','EarningWaiter','WaiterById']),
        ...mapActions('income',['WaiterCash']),
        // 提现
        WithdrawHandler(){
            if(this.value1 < this.waiterInfo.money){
                this.params = {
                    waiterid:this.info.id,
                    money:this.value1
                }
                console.log(this.params)
                this.WaiterCash(this.params)
                .then(res=>{
                    this.$router.push({path:'./income_list'})
                    Toast('已提交申请')
                })
            }else {
                Toast('余额不足')
            }
        },
        // 返回到我的页面
        backHandler(){
            this.$router.push({path:'./income_list'})
        }
    
    },     
}
</script>
<style scoped>
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
.d_money{
    background-color:#f1f1f1;
    height:100px;
    padding-top:3em;
}
.d_money .van-cell{
    background-color:#f1f1f1;
}
</style>