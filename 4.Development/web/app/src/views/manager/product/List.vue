<template>
    <div class="product">
        <briup-fullpagelayout title="产品列表" @back="backHandler">
            <van-row>
                <!-- 侧边标签栏 -->
                <van-col span="4">
                    <van-sidebar v-model="activeKey">
                        <van-sidebar-item 
                        @click="categoryId = c.id" 
                        v-for="c in categories.list" 
                        :title="c.name" 
                        :key="c.id" />
                    </van-sidebar>
                </van-col>
                <!-- /侧边标签栏 -->

                <!-- 右边产品详情 -->
                <van-col span="20">
                    <div class="right_content">
                        <briup-product-item 
                            v-for='p in productCustomerFilter(categoryId)' 
                            :key="p.id" 
                            :data='p'>
                        </briup-product-item>
                    </div>
                    <!-- {{products}} -->
                </van-col>
                <!-- /右边产品详情 -->
            </van-row>
            <!-- 底部总额 -->
            <van-row class="domn">
                <van-col :span="8">总额 <strong>￥{{total}}</strong> </van-col>
                <van-col :offset="12" :span="4" @click="toConfirmOrderHandler">立即下单</van-col>
            </van-row>
            <!-- /底部总额 -->
        </briup-fullpagelayout>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    data() {
        return{
            activeKey: 0,
            categoryId:''
        }
    },
    computed: {
        // ...mapState('shopcar',['orderLines']),
        ...mapState('product',['products']),
        ...mapState('category',['categories']),
        ...mapGetters('product',['productCustomerFilter']),
        ...mapGetters('shopcar',['total'])
    },
    created() {
        this.QueryCategories({page:0,pageSize:100});
        // 查询所有产品信息
        this.QueryProducts({page:0,pageSize:100});
        // this.finProductById(this.$route.query.id)
        this.categoryId = this.$route.query.id;
        this.activeKey = this.$route.query.activeKey
    },
    methods: {
        ...mapActions('category',['QueryCategories']),
        ...mapActions('product',['QueryProducts']),
        // 回退
        backHandler(){
            this.$router.push({path:'/manager/home'});
        },
        // 下单页面
        toConfirmOrderHandler(){
            this.$router.push({path:'/manager/order_conform'})
        }
    }
}
</script>

<style>
.domn{
    position: fixed;
    bottom: 0;
    line-height: 4em;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    text-align: center;
}
</style>