<template>
    <div class="conform">
        <briup-fulllayout title="订单确认">
            <!-- 服务地址 -->
            <van-row class="line">
                <van-col :span="6" class="line_left">
                    <van-icon size="26" name="location-o" />
                </van-col>
                <van-col @click="SelectAddressHandler" :span="18" class="line_right">
                    <div class="label">服务地址</div>
                    <div>
                        <van-col :span=8>姓名：{{addresses[0].customerId}}</van-col>
                        <van-col :span=16>手机号：{{addresses[0].telephone}}</van-col>
                        <van-col>地址：
                            {{addresses[0].province}} 
                            {{addresses[0].city}} 
                            {{addresses[0].area}} 
                            {{addresses[0].address}}
                        </van-col> 
                        <!-- {{addresses}}   -->
                    </div>
                </van-col>
            </van-row>
            <!-- /服务地址 -->

            <!-- 订单详情 -->
            <van-row class="line">
                <van-col :span="6" class="line_left">
                    <van-icon size="26" name="balance-list-o" />
                </van-col>
                <van-col :span="18" class="line_right">
                    <div class="label">订单详情</div>
                    <div>
                        <van-row v-for="line of orderLines.values()" :key="line.productId">
                            <van-col :span="8">{{line.productName}}</van-col>
                            <van-col :span="4">￥{{line.price}}</van-col>
                            <van-col :span="4">x{{line.number}}</van-col>
                            <van-col :span="8">￥{{line.number*line.price}}</van-col>
                        </van-row>
                        <van-row style="border-top:1px dotted #ededed">
                            <van-col :span="16"></van-col>
                            <van-col :span="8">￥{{total}}</van-col>
                        </van-row>
                        <!-- {{line}} -->
                    </div>
                </van-col>
            </van-row>
            <!-- /订单详情 -->

            <!-- 服务时间 -->
            <van-row class="line">
                <van-col :span="6" class="line_left">
                    <van-icon size="26" name="clock-o" />
                </van-col>
                <van-col :span="18" class="line_right">
                    <div class="label">服务时间</div>
                    <div @click="()=>{this.show = true}">
                        {{currentDate}}
                    </div>
                </van-col>
            </van-row>
            <!-- /服务时间 -->

            <!-- 支付方式 -->
            <van-row class="line">
                <van-col :span="6" class="line_left">
                    <van-icon size="26" name="balance-o" />
                </van-col>
                <van-col :span="18" class="line_right">
                    <div class="label">支付方式</div>
                    <div>第三方平台（支付宝）</div>
                </van-col>
            </van-row>
            <van-popup v-model="show" position="bottom">
                <van-datetime-picker v-model="currentDate" type="datetime"/>
            </van-popup>
            <!-- /支付方式 -->

            <!-- 确定订单 -->
            <van-button size="large" @click="OrderConfirmHandler" type="warning">确认订单</van-button>
            <!-- /确定订单 -->
        </briup-fulllayout>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    data() {
        return{
            currentDate:new Date(),
            show:false
        }
    },
    computed: {
        ...mapState('address',['addresses']),
        ...mapState('shopcar',['orderLines']),
        ...mapGetters('shopcar',['total']),
    },
    created() {
        this.findAllAddresses()     
    },
    methods: {
        ...mapActions('address',['findAllAddresses']),
        ...mapActions('order',['SaveOrder']),
        // 选择服务地址
        SelectAddressHandler(){
            this.$router.push({path:'/manager/address'})
            
        },
        OrderConfirmHandler(){
            // alert("确认订单")
            // 保存订单信息
            this.SaveOrder()
            .then((response)=>{
                this.$notify({
                    type:'success',
                    message:response.statusText
                });
            })
            // 路由跳转至订单页面
            this.$router.push({path:'/manager/order'})
        }
    }
}
</script>

<style>
.line_left{
    padding: 1em 0;
    text-align: center;
    font-size: 24px;
}
.line_right{
    border-bottom: 1px solid #ccc;
    padding: 1em;
}
.label {
  font-size: 14px;
  font-weight: bold;
  color: #999;
  line-height: 2em;
}
</style>