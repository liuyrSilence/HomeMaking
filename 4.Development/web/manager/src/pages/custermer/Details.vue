<template>
    <div class='details'>
    <el-link type="primary">返回</el-link>
    <div class="tab">
     <el-tabs v-model="activeName" @tab-click="handleClick">
            <!--基本信息-->
            <el-tab-pane label="基本信息" name="first">{{id}}
</el-tab-pane>
            <!--基本信息-->
            <!--订单信息-->
            <el-tab-pane label="订单信息" name="second">订单信息</el-tab-pane>
            <!--订单信息-->
            
            <!--服务地址-->
            <el-tab-pane label="服务地址" name="third">
                <!--表格-->
                <el-table
                :data="addresses"
                stripe
                style="width: 100%">
                <el-table-column
                prop="id"
                label="编号"
                width="80">
                </el-table-column>
                <el-table-column
                align='center'
                prop="province"
                label="省"
                width="130">
                </el-table-column>
                <el-table-column
                align='center'
                prop="city"
                label="市"
                width="500">
                </el-table-column>
                <el-table-column
                prop="area"
                label="区/县">
                </el-table-column>
                <el-table-column
                prop="address"
                label="街道">
                </el-table-column>
                <el-table-column
                prop="telephone"
                label="手机号">
                </el-table-column>
                </el-table>
                <!--表格-->
                <!--按钮-->
                <div class="btn">
                    <el-button type="primary" size="small" @click='toAddHandler'>添加服务地址</el-button>
                </div>
                <!--按钮-->
                <!--模态框-->
                
                <!--模态框-->
            </el-tab-pane>
            <!--服务地址-->
        </el-tabs> 
    </div>
    </div>
</template>
<script>
    import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return {
            activeName:'first',
        }
    },
    created() {
        this.findAddressById(this.$route.params.id)
    },
    computed: {
        ...mapState('address',['addresses'])
    },
    methods: {
        ...mapActions('address',['findAddressById']),
    },
}
</script>
<style scoped>
.tab{
    margin-top: 1em;
}
.btn{
    margin-top:1em;
}
</style>