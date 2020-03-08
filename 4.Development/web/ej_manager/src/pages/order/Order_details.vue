<template>
  <div class="details">
    <el-link type="primary" @click="backHandler">返回</el-link>
    <p>订单编号：{{ orderbyid.id }}</p>
    <p>下单时间：{{ orderbyid.orderTime }}</p>
    <p>订单状态：{{ orderbyid.status }}</p>
    <p>员工编号：{{ orderbyid.waiterId }}</p>
    <p>顾客：{{ orderbyid.customer.realname }}</p>
    <p>顾客手机号：{{ orderbyid.customer.telephone }}</p>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {

    }
  },
  created() {
    this.findOrderbyId(this.$route.params.id)
  },
  computed: {
    ...mapState('order', ['orderbyid'])
  },
  methods: {
    ...mapActions('order', ['findOrderbyId']),
    // 返回上一级
    backHandler() {
      this.$router.push({ name: 'order' })
    }
  }
}
</script>
