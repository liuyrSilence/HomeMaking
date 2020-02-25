<template>
    <div class="details">
        <briup-fullpagelayout title="订单详情" @back="backHandler">
            {{$route.query}}
            <van-row>
                <van-col :span="24" :offset="1">
                    <!-- 头像 -->
                    <div class="photo">
                        <van-uploader  >
                            <img src="../../../assets/user.png" alt=""/>
                        </van-uploader>
                    </div>
                    <!-- <van-image
                        v-for="c in $route.query.customer"
                        round
                        width="10rem"
                        height="10rem"
                        :src="c.imgPhoto"
                        /> -->
                    <div>
                    员工姓名：{{$route.query.waiter.realname}}
                    </div>
                    <div >
                    员工联系方式：{{$route.query.waiter.telephone}}
                    </div>
                    <div>总价：{{$route.query.total}}</div>
                    <div>服务时间：{{$route.query.orderTime | datefmt}} </div>
                    <div >服务地点：
                    {{$route.query.address.province}}
                    {{$route.query.address.city}}
                    {{$route.query.address.area}}
                    {{$route.query.address.address}}
                    </div>
                
                </van-col>
            </van-row>
        </briup-fullpagelayout>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    created() {
        // this.w_name = this.$route.query.waiter.realname,
        // this.w_tel = this.$route.query.waiter.telephone,
        // this.orderTime = this.$route.query.orderTime,
        // this.province = this.$route.query.address.province,
        // this.city = this.$route.query.address.city,
        // this.area = this.$route.query.address.area,
        // this.address = this.$route.query.address.address
    },
    computed: {

    },
    methods:{
        // 返回到订单列表页面
        backHandler(){
            this.$router.push({path:'/manager/order'})
        }
    }
}
</script>

<style>
.photo {
  margin: 0 auto;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  box-sizing: border-box;
  border:1px solid #ccc;
  overflow:hidden;
  padding: .5em;
}
</style>