<template>
    <div> 
        <briup-fullpagelayout title="新增地址" @back="backHandler">
            <div class="address" >
                <!-- 地址列表 -->
                <div class="add">
                    <van-cell-group>
                        <van-field v-model="customerId" label="顾客编号：" />
                        <van-field v-model="telephone" label="联系方式：" />
                        <van-field v-model="province" label="省份" />
                        <van-field v-model="city" label="城市：" />
                        <van-field v-model="area" label="区域：" />
                        <van-field v-model="address" label="具体位置：" />
                    </van-cell-group>
                </div>
                <!-- /地址列表 -->
                <!-- 新增地址 -->
                <van-button @click="backListHandler()" size="large" type="warning">确定</van-button>
                <!-- /新增地址 -->
            </div>
        </briup-fullpagelayout>
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
        ...mapState('user',['info'])
    },
    created() {
        this.customerId = this.info.id,
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
                // id:this.$route.query.id,
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