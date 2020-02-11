<template>
  <div class="address_item">
    <van-row>
      <van-col :span="3">
        <div class="yuan"></div>
      </van-col>
      <van-col :span="18">
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
    </van-row>
    <!-- {{data}} -->
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
    editAddressHandler(data){
      // alert("编辑")
      // console.log(data,'==')
      this.$router.push({path:'/manager/address_edit',query:data})
    },
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
.address_item .yuan {
  margin: 0 auto;
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  border: 1px solid #ccc;
  
}
.address_item .option {
  text-align:center;
  line-height: 3em;
}
</style>