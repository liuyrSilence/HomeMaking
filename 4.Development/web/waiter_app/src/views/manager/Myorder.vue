<template>
    <div class="myorder">
        <briup-fulllayout title="我的订单" @back="backHandler">

        </briup-fulllayout>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {

    },
    created() {

    },
    methods: {
        // 返回到我的页面
        backHandler(){
            this.$router.push({path:'./user'})
        }
    }
}
</script>