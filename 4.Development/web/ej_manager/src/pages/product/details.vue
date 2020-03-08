<template>
    <div>
    <el-link type="primary" @click='backHandler'>返回</el-link>
        <p>产品名称：{{this.$route.params.id.name}}</p>
        <p>产品价格：{{this.$route.params.id.price}}</p>
        <p>产品描述：{{this.$route.params.id.description}}</p>
        <p>产品主图:</p><div class="block"><el-image :size="120" :src="'http://134.175.100.63:8686/group1/'+this.src" /></div>
              </div>
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