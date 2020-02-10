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
        <van-icon name="edit" size="larger" /> &nbsp;
        <van-icon name="delete" size="larger" />
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  props:['data']
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
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  border: 1px solid #ccc;
  
}
.address_item .option {
  text-align:center;
  line-height: 3em;
}
</style>