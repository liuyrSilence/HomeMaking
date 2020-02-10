<template>
    <div>
        <!-- 顶部导航栏 -->
        <!-- <div class="title">
        <van-row>
            <van-col span="8">
            <van-icon size="45" style="padding:12px" name="arrow-left" color="orange"/>
            </van-col>
            <van-col span="10" style="font-size:26px;color:#333333;padding:16px;">常用地址</van-col>
            <van-col span="6" style="font-size:22px;color:orange;padding:20px 0 0 20px;">新增地址</van-col>
        </van-row>
        </div> -->
        <briup-fulllayout title="地址列表">
            <div class="address" >
                <div class="list">
                    <briup-address-item v-for="address in addresses" :key="address.id" :data="address"></briup-address-item>
                </div>
            </div>
        </briup-fulllayout>
        <!-- /顶部导航栏 -->

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