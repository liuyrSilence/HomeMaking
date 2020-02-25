<template>
  <div class="comment_item">
    <van-row >
      <van-col :span="2"></van-col>
      <van-col :span="19" >
        <!-- <div>
          {{data.customerId}}&nbsp; {{data.telephone}}
        </div>
        <div>
          {{data.province}} {{data.city}} {{data.area}} {{data.address}}
        </div> -->
        <div>顾客：{{comments.list.cusId}}</div>
        <div>订单：{{comments.list.orderId}}</div>
        <div>评论内容：{{comments.list.content}}</div>
      </van-col>
      <!-- {{comments.list}} -->
    </van-row>
    
  </div>
</template>
<script>
import { Dialog } from 'vant';
import {mapState,mapActions} from 'vuex'

export default {
  props:['data'],
  computed: {
    ...mapState('comment',['comments'])
  },
  created() {

  },
  methods: {
    
  }
}
</script>
<style scoped>

</style>