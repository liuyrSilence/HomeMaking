<template>
    <div>
    <el-link type="primary" @click='backHandler'>返回</el-link>
        <p>产品名称：{{this.$route.params.id.name}}</p>
        <p>产品价格：{{this.$route.params.id.price}}</p>
        <p>产品描述：{{this.$route.params.id.description}}</p>
        <p>产品主图：<el-image :src="src"></el-image></p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            src:this.$route.params.id.photo
        }
    },
    created() {
        
    },
    methods: {
        //返回上一级
        backHandler(){
            this.$router.push({name:'product'})
        }
    },
}
</script>