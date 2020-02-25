<template>
    <div>
        <!-- 顶部导航栏 -->
        <briup-fullpagelayout title="编辑地址" @back="backHandler">
            <div class="address_edit" >
                <div class="edit">
                    <!-- {{$route.query}} -->
                    <van-cell-group>
                        <van-field v-model="customerId" />
                        <van-field v-model="telephone" />
                        <van-field v-model="province" />
                        <van-field v-model="city" />
                        <van-field v-model="area" />
                        <van-field v-model="address" />
                    </van-cell-group>
                </div>
                <!-- 编辑地址 -->
                <van-button 
                    @click="backListHandler()" 
                    size="large" 
                    type="warning">确定</van-button>
                <!-- /编辑地址 -->
            </div>
        </briup-fullpagelayout>
        <!-- /顶部导航栏 -->
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data() {
        return{
            customerId:'',
            telephone:'',
            province:'',
            city:'',
            area:'',
            address:'',
        }
    },
    computed: {
        ...mapState('address',['conformAddresses'])
    },
    created() {
        // 利用this.$router.query获取参数
        this.customerId = this.$route.query.customerId,
        this.telephone = this.$route.query.telephone
        this.province = this.$route.query.province
        this.city = this.$route.query.city
        this.area = this.$route.query.area
        this.address = this.$route.query.address
    },
    methods: {
        ...mapActions('address',['findAllAddresses','SaveOrUpdateAddress']),
        // 回退
        backHandler(){
            this.$router.back();
        },
        // 回到地址列表页面
        backListHandler(){
            let form = {
                id:this.$route.query.id,
                customerId:this.customerId,
                telephone:this.telephone,
                province:this.province,
                city:this.city,
                area:this.area,
                address:this.address
            }
            this.$router.push({path:'/manager/address'})
            
            this.SaveOrUpdateAddress(form)
        }
       
    }
}
</script>

<style>
.van-col .one{
    border-bottom: 1px solid #ccc;
    padding:1em
}
</style>