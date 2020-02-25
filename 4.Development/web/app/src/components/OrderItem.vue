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
        <div>服务时间：{{data.orderTime | datefmt}}</div>
        <div v-if="data.address">服务地点：
          {{data.address.province}} 
          {{data.address.city}}
          {{data.address.area}}
          {{data.address.address}}
        </div>
      </van-col>
    </van-row>
    <div class="text-right" style="margin-bottom:.5em" @click="toOrderDetails(data)">
      详情
    </div>
    <div class="text-right">
      共计 1 个服务，合计￥ {{data.total}}
    </div>
  </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'

export default {
  props:{
    data:{type:Object}
  },
  computed:{
    ...mapState('address',['addresses']),
    ...mapState('user',['info']),
    ...mapState('shopcar',['orderLines']),


  },
  methods: {
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