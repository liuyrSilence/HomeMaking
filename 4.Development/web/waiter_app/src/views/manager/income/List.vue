<template>
    <div class="income_list">
        <briup-fulllayout title="收入列表" @back="backHandler">
             <div v-if="earn.length > 0">
                <van-row>
                    <van-col :span="4" style="text-align:center"><van-icon name="balance-o" /></van-col>
                    <van-col :span="14">收益总金额：{{IncomeTotal}}  元</van-col>
                    <van-col :span="6">
                        <van-button size="small" type="warning" plain @click="WithdrawHandler()">提现</van-button>
                    </van-col>
                </van-row>
                <van-panel v-for="e in earn" :key="e.id">
                    <!-- {{e}} -->
                    <van-row>
                        <van-col :span="4" style="text-align:center"><van-icon name="balance-o" /></van-col>
                        <van-col :span="10">收益： {{e.money}} 元</van-col>
                    </van-row>
                    <van-row>
                        <van-col :span="4" style="text-align:center"><van-icon name="clock-o" /></van-col>
                        <van-col :span="20">收益时间：{{e.transactionTime | datefmt}}</van-col>
                    </van-row>
                    <van-row>
                        <van-col :span="4" style="text-align:center"><van-icon name="comment-o" /></van-col>
                        <van-col :span="20">
                            收益描述：{{e.description}}
                        </van-col>
                    </van-row>
                    <van-row>
                        <van-col :span="4" style="text-align:center"><van-icon name="user-o" /></van-col>
                        <van-col :span="20">服务对象： {{e.userId}}</van-col>
                    </van-row> 
                </van-panel>
            </div>
        </briup-fulllayout>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex' 
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState('user',['info','earn']),
        ...mapGetters('user',['IncomeTotal'])
    },
    created() {
        this.EarningWaiter(this.info.id)
    },
    methods: {
        ...mapActions('user',['EarningWaiter']),
        // 提现
        WithdrawHandler(){
            this.$router.push({path:'./withdraw'})
        },
        // 返回到我的页面
        backHandler(){
            this.$router.push({path:'./user'})
        }
    }
}
</script>