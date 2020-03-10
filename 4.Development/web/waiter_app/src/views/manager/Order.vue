<template>
  <div class="order">
    <van-nav-bar title="我的订单" />
    <van-tabs v-model="active" color="#1659a0">
      <van-tab title="全部">
        <briup-order-item
          :data="orders" 
          @accept="acceptHandler"
          @reject="rejectHandler"
          @complete="completeHandler">
        </briup-order-item>
      </van-tab>
      <van-tab title="待接单">
        <briup-order-item 
          :data="ordersStatusFilter('待接单')"
          @accept="acceptHandler"
          @reject="rejectHandler">
        </briup-order-item>
      </van-tab>
      <van-tab title="待服务">
        <briup-order-item 
          :data="ordersStatusFilter('待服务')"
          @complete="completeHandler">
        </briup-order-item>
      </van-tab> 
      <van-tab title="待确认">
        <briup-order-item 
          :data="ordersStatusFilter('待确认')"></briup-order-item>
      </van-tab>
      <van-tab title="已完成">
        <briup-order-item 
          :data="ordersStatusFilter('已完成')">
        </briup-order-item>
      </van-tab>
    </van-tabs>
    <!-- {{info}} -->
    <!-- {{orders}} -->
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return {
      active:0,
      // orderId:'',
      param:{
        waiterId:this.waiterId
      }
    }
  },
  computed: {
    ...mapState('order',['orders']),
    ...mapState('user',['info']),
    ...mapGetters('order',['ordersStatusFilter'])
  },
  created() {
    this.FindWaiterOrders(this.param)
  },
  methods: {
    ...mapActions('order',['FindWaiterOrders','acceptOrder','rejectOrder','completeOrder']),
    // 接受订单
    acceptHandler(orderId){
      this.params = {
        orderId:orderId,
        waiterId:this.info.id
      }
      // console.log(this.params)
       this.acceptOrder(this.params)
      .then((response)=>{
        this.$toast(response.statusText);
      })
    },
    // 拒绝订单
    rejectHandler(orderId){
      this.rejectOrder(orderId)
      .then((response)=>{
        this.$toast(response.statusText);
      })
    },
    // 完成
    completeHandler(orderId){
      this.completeOrder(orderId)
      .then((response)=>{
        this.$toast(response.statusText);
        this.FindWaiterOrders(this.param)
      })
    }
  }
}
</script>
<style scoped>
.order {
  background: #f1f1f1;
}
</style>