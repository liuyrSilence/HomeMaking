<template>
    <briup-fulllayout title="确认订单">
        服务地址：
        <van-dropdown-menu>
            <van-dropdown-item v-model="addressId" :options="options" />
        </van-dropdown-menu>
        <div style="margin:1em 0">
            订单详情：
        </div>
        <div style="padding:0 4em">
            <p>服务名称：{{$route.query.name}}</p>
            <p>服务描述：{{$route.query.description}}</p>
            <p>服务价格：{{$route.query.price}}</p>
            <p>服务数量：1</p>
            <p>服务小计：{{$route.query.price}}</p>
        </div>
        <div style="position:absolute;bottom:0;width:100%">
            <van-button block type="primary" @click="submitHandler">提交</van-button>
        </div>
    </briup-fulllayout>
</template>

<script>
import {mapState} from 'vuex'
import {get,post_obj_array} from '../../../http/axios'
export default {
    data(){
        return{
            addressId:0,
            address:[],
            orderLines:[]
        }
    },
    computed:{
        ...mapState('user',['info']),
        options:function(){
           return this.address.map((item)=>{
                return {
                    text:item.province + ' ' + item.city + ' ' + item.area + ' ' + item.address,
                    value:item.id 
                }
            })
        }
    },
    created(){
        this.loadAddress()
        let orderLine = {
            number:1,
            price:this.$route.query.price,
            productId:this.$route.query.productId
        }
        this.orderLines.push(orderLine)
    },
    methods:{
        submitHandler(){
            let obj = {
                customerId:this.info.id,
                addressId:this.addressId,
                orderLines:this.orderLines
            }
            post_obj_array('/order/save',obj).then((res)=>{
                this.$router.push({
                    path:'order'
                })
            })
        },
        loadAddress(){
            let id = this.info.id;
            get('/address/findByCustomerId?id='+id).then((res)=>{
                this.address = res.data
                this.addressId = this.address[0].id
            })
        },
    }
}
</script>