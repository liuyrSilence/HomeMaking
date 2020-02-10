<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <div class="title">
      <van-row>
        <van-col span="6">
          <van-icon size="45" style="padding:12px" name="cross" color="#333333"/>
        </van-col>
        <van-col span="14" style="font-size:26px;color:#333333;padding:16px;">e洁家政服务平台</van-col>
        <van-col span="4">
          <van-icon color="#333333" size="45" style="padding:12px" name="chat-o" />
        </van-col>
      </van-row>
    </div>
    <!-- /顶部导航栏 -->

    <!-- 轮播图区域 -->
    <header>
      <!-- <img src="../../assets/home.jpg" alt=""> -->
      <van-swipe class="my-swipe" :height="260"  :autoplay="3000" indicator-color="white">
        <van-swipe-item >
          <img src="../../assets/home.jpg" alt="">
        </van-swipe-item>

        <van-swipe-item>
          <img src="../../assets/home1.jpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </header>
    <!-- /轮播图区域 -->

    <!-- 栏目，商品分类区域 -->
    <van-grid :column-num="3">
      <van-grid-item
        @click="toProductHandler(c.id,index)"
        v-for="(c,index) in categories"
        :key="c.id"
        :icon="c.icon"
        :text="c.name"
      />
    </van-grid>
    <!-- {{categories}} -->
    <!-- /栏目，商品分类区域 -->

    <!-- 产品管理 -->
    <van-grid :column-num="2">
      <van-grid-item
        @click="toProductListHandler(p.id)"
        v-for="p in products"
        :key="p.id">
        <van-image :src="p.photo" />
        <div>{{p.name}}</div>
      </van-grid-item>
    </van-grid>
    <!-- {{products}} -->
    <!-- /产品管理 -->
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  computed:{
    ...mapState('category',['categories']),
    ...mapState('product',['products']),
  },
  created(){
    this.findAllCategories();
    this.QueryProducts({page:0,pageSize:4});
  },
  methods:{
    ...mapActions('category',['findAllCategories']),
    ...mapActions('product',['QueryProducts']),
    // 页面跳转至商品分类，各个产品
    toProductHandler(id,activeKey){
      this.$router.push({path:'/manager/product_list',query:{id,activeKey}})
    },
    toProductListHandler(id,activeKey){
      this.$router.push({path:'/manager/product_list',query:{id,activeKey}})
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  overflow: hidden;
}
.title {
  height:70px;
}
.home {
  padding-bottom: 50px;
}
.header {
  height: 260px;
  overflow: hidden;
}
.header img {
  width: 100%;
}
</style>