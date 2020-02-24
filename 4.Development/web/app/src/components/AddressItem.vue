<template>
  <div class="address_item">
    <van-row >
      <van-col :span="2"></van-col>
      <van-col :span="19" >
        <div>
          {{data.customerId}}&nbsp; {{data.telephone}}
        </div>
        <div>
          {{data.province}} {{data.city}} {{data.area}} {{data.address}}
        </div>
      </van-col>
      <van-col :span="3" class="option">
        <van-icon @click="editAddressHandler(data)" name="edit" size="larger" /> &nbsp;
        <van-icon @click="deleteAddressHandler()" name="delete" size="larger" />
      </van-col>
      <!-- {{data}} -->
    </van-row>
    
  </div>
</template>
<script>
import { Dialog } from 'vant';
import {mapState,mapActions} from 'vuex'

export default {
  props:['data'],
  computed: {
    ...mapState('address',['addresses'])
  },
  created() {

  },
  methods: {
    ...mapActions('address',['deleteAddressById']),
    // 修改地址,data为当前行数据
    editAddressHandler(data){
      // console.log(data,'==')
      this.$router.push({path:'/manager/address_edit',query:data})
    },
    // 删除地址
    deleteAddressHandler(){
      // alert("是否删除该地址")
      Dialog.confirm({
        message: '是否删除该地址？'
      }).then(() => {
        // 调用方法，删除地址
        this.deleteAddressById(this.data.id)
      }).catch(() => {
        // on cancel
      });
    },
  }
}
</script>
<style scoped>
.address_item {
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #ffffff;
}
.address_item .option {
  text-align:center;
  line-height: 3em;
}
</style>