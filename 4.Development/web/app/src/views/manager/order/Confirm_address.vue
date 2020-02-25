<template>
  <div class="confirm_address">
      <briup-fullpagelayout title="地址列表" @back="backHandler">
       <div class="list">
            <briup-conform-address v-for="address in conformAddresses" :key="address.id" :data="address"></briup-conform-address>
        </div>
      </briup-fullpagelayout>
      <!-- {{data}} -->
  </div>
</template>
<script>
import { Dialog } from 'vant';
import {mapState,mapActions} from 'vuex'

export default {
  props:['data'],
  computed: {
    ...mapState('address',['conformAddresses'])
  },
  created() {
    this.findAllAddresses();
  },
  methods: {
    ...mapActions('address',['findAllAddresses']),
    // 回退
    backHandler(){
        this.$router.push({path:'/manager/order_conform'});
    },
  }
}
</script>
<style scoped>
.confirm_address {
        background-color: #f1fbf1;
        padding-bottom: .2em;
    }
</style>