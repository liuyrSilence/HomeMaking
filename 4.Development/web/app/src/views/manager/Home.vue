<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <div class="title">
      <van-row>
        <van-col span="8">
          <van-icon size="30" @click="CloseHome" style="padding:16px" name="cross" color="#333333"/>
        </van-col>
        <van-col span="16" style="font-size:20px;color:#333333;padding:16px;text-align:left">e洁家政服务平台</van-col>
      </van-row>
    </div>
    <!-- /顶部导航栏 -->

    <!-- 轮播图区域 -->
    <header>
      <van-swipe class="my-swipe" :height="260" :autoplay="3000" indicator-color="white">
        <van-swipe-item >
          <img src="../../assets/home.jpg" alt="">
          e洁家政1
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/home1.jpg" alt="">
          e洁家政2
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
        :text="c.name"/>
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
    ...mapActions('user',['logout']),
    ...mapActions('category',['findAllCategories']),
    ...mapActions('product',['QueryProducts']),
    // 页面跳转至商品分类，各个产品
    toProductHandler(id,activeKey){
      this.$router.push({path:'/manager/product_list',query:{id,activeKey}})
    },
    toProductListHandler(id,activeKey){
      this.$router.push({path:'/manager/product_list',query:{id,activeKey}})
    },
    // 跳转至登录页面
    CloseHome(){
      this.logout()
      .then(()=>{
        this.$router.push({path:'/login'})
      })
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  overflow: hidden;
}
.header {
  /* width: 2000px; */
  overflow: hidden;
}
.header img {
  width: 100%;
}
</style>