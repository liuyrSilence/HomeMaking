<template>
  <div class="order">
    <van-nav-bar title="我的订单" />
    <van-tabs v-model="active" color="#1659a0">
      <van-tab title="全部">
        <briup-order-item 
          v-for='order in orders' 
          :key="order.id"  
          :data='order'>
        </briup-order-item>
      </van-tab>
      <van-tab title="待派单">
        <briup-order-item 
          v-for="order in ordersStatusFilter('待派单')"
          :key="order.id"  
          :data='order'>
        </briup-order-item>
      </van-tab>
      <van-tab title="待接单">
        <briup-order-item 
          v-for="order in ordersStatusFilter('待接单')"
          :key="order.id"  
          :data='order'>
        </briup-order-item>
      </van-tab> 
      <van-tab title="已完成">
        <briup-order-item 
          v-for="order in ordersStatusFilter('已完成')"
          :key="order.id"  
          :data='order'>
        </briup-order-item>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return {
      active:0,
    }
  },
  computed: {
    ...mapState('order',['orders']),
    ...mapGetters('order',['ordersStatusFilter'])
  },
  created() {
    this.findAllOrders()
  },
  methods: {
    ...mapActions('order',['findAllOrders'])
  }

}
</script>
<style scoped>
.order {
  background: #f1f1f1;
}
</style>