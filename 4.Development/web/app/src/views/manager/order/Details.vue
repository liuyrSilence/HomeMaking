<template>
    <div class="details">
        <briup-fullpagelayout title="订单详情" @back="backHandler">
        <!-- {{orders}} -->
        
        </briup-fullpagelayout>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{

        }
    },
    created() {

    },
    computed: {
        ...mapState('order',['orders'])
    },
    methods:{
        // 返回到订单列表页面
        backHandler(){
            this.$router.push({path:'/manager/order'})
        }
    }
}
</script>