<template>
    <div class="income_details">
        <briup-fulllayout title="收入详情" @back="backHandler">

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
            this.$router.push({path:'./income'})
        }
    }
}
</script>