<template>
  <div class="order_item">
    <van-row class="header"> 
      <van-col span="12">订单编号: {{data.id}}</van-col>
      <van-col span="12" class="status">{{data.status}}</van-col>
    </van-row>
    <!-- {{data}} -->
    <van-row>
      <van-col :span="24" :offset="1">
        <div v-if="data.waiter!=null">
          员工姓名：
          {{data.waiter.realname}} 
        </div>
        <div v-if="data.waiter!=null">
          员工联系方式：
          {{data.waiter.telephone}} 
        </div>
        <!-- <div>总价：{{data.total}}</div> -->
        <div>
          <van-row v-for="line of data.orderLines.values()" :key="line.productId">
            <van-col :span="8">产品名称：{{line.product.name}}</van-col>
          </van-row>
        </div>
        <div>服务时间：{{data.orderTime | datefmt}}</div>
        <div v-if="data.address">服务地点：
          {{data.address.province}} 
          {{data.address.city}}
          {{data.address.area}}
          {{data.address.address}}
        </div>
        <div style="margin-top:.5em">
          <van-button plain hairline size="small" type="warning" @click="PaymoneyHandler">确认支付</van-button>
          <van-button plain hairline size="small" type="warning" style="margin-left:.5em"
            @click="ConfirmHandler">确认订单
          </van-button>
        </div>
      </van-col>
    </van-row>
    <div class="text-right" style="margin-bottom:.5em" @click="toOrderDetails(data)">
      详情
    </div>
    <div class="text-right">
      共计 1 个服务，合计￥ {{data.total}}
    </div>
    <!-- {{data}} -->
    <!-- {{cusInfo}} -->
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
  props:{
    data:{type:Object}
  },
  computed:{
    ...mapState('address',['addresses']),
    ...mapState('user',['info','cusInfo']),
    ...mapState('shopcar',['orderLines']),
  },
  created() {
    this.FindCustomerById(this.info.id)
  },
  methods: {
    ...mapActions('user',['FindCustomerById']),
    ...mapActions('order',['ConfirmOrder','findAllOrders','payHandler']),
    // 确认支付
    PaymoneyHandler(){    
      if(this.data.total <= this.cusInfo.money){
        var orderid = this.data.id
        var customer_id = this.info.id
        var order_money = this.data.total
        this.payHandler({orderid,customer_id,order_money}).then(()=>{
        // console.log('1111')
        // this.findAllOrders()
        })
      }else{
        Toast('余额不足,请充值')
      }
      // let url = 'http://134.175.100.63:5588/order/paymoney?orderid='+orderid+'&customer_id='+customer_id+'&order_name=%E8%A3%A4%E5%AD%90&order_money='+order_money+'&description=%E5%B9%B2%E5%87%80'
      // console.log(document.hidden,'===')
      // window.open(url,'_blank')
      // this.findAllOrders()
    },
    // 确认订单
    ConfirmHandler(){
      var orderid = this.data.id
      // 确认订单（为员工分配佣金）
      this.ConfirmOrder(orderid)
    },
    // 调转订单详情页面
    toOrderDetails(data){
      this.$router.push({
        path:'/manager/order_details',
        query:{
          data:JSON.stringify(data)
        }
      })
    }
  }
}
</script>
<style scoped>
.order_item {
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #ffffff;
}
.order_item .header {
  line-height: 2.5em;
  font-size: 14px;
}
.order_item .header .status {
  text-align: right;
  font-size: 12px;
  color: #fd621f;
}
.order_item img {
  width: 100%;
  border-radius: 3px;
}


</style>