<template>
    <div> 
        <briup-fulllayout title="新增地址">
            <div class="address" >
                <!-- 地址列表 -->
                <div class="add">
                    <!-- <van-field v-model="text" label="顾客编号" /> -->
                </div>
                <!-- /地址列表 -->
                <!-- 新增地址 -->
                <van-button @click="backListHandler()" size="large" type="warning">确定</van-button>
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

    },
    created() {

    },
    methods: {
        ...mapActions('address',['findAllAddresses']),
        // 回到地址列表页面
        backListHandler(){
            this.$router.push({path:'/manager/address'})
        }
       
    }
}
</script>