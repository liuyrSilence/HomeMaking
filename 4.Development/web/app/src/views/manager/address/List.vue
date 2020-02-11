<template>
    <div> 
        <briup-fulllayout title="地址列表">
            <div class="address" >
                <!-- 地址列表 -->
                <div class="list">
                    <briup-address-item v-for="address in addresses" :key="address.id" :data="address"></briup-address-item>
                </div>
                <!-- /地址列表 -->
                <!-- 新增地址 -->
                <van-button @click="addAddressHandler()" size="large" type="warning">新增地址</van-button>
                <!-- /新增地址 -->
            </div>
        </briup-fulllayout>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data() {
        return{
            
        }
    },
    computed: {
        ...mapState('address',['addresses'])
    },
    created() {
        this.findAllAddresses();
    },
    methods: {
        ...mapActions('address',['findAllAddresses']),
        // 新增地址
        addAddressHandler(){
            this.$router.push({path:'/manager/address_add'})
        }
       
    }
}
</script>

<style scoped>
    .title{
        border-bottom: 1px solid #ccc
    }
    .address {
        background-color: #f1f1f1;
        padding-bottom: .2em;
    }
</style>