<template>
    <div class='details'>
    <el-link type="primary" @click='backHandler'>返回</el-link>
    <div class="tab">
     <el-tabs v-model="activeName" @tab-click="handleClick">
            <!--基本信息-->
            <el-tab-pane label="基本信息" name="first">
                <p>基本信息</p>
            </el-tab-pane>
            <!--基本信息-->
            <!--订单信息-->
            <el-tab-pane label="订单信息" name="second">
                <!-- 表格 -->
                <el-table
                :data="order7"
                stripe
                style="width: 100%">
                <el-table-column
                prop="id"
                label="订单编号"
                width="80">
                </el-table-column>
                <el-table-column
                align='center'
                prop="orderTime"
                label="下单时间"
                width="130">
                </el-table-column>
                <el-table-column
                align='center'
                prop="total"
                label="总价"
                width="500">
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态">
                </el-table-column>
                <el-table-column
                prop="customerId"
                label="顾客ID">
                </el-table-column>
                <el-table-column
                align='center'
                fixed="right"
                label="操作"
                width="150">
                <template slot-scope="scope">
                    <el-button @click="detailsHandler(scope.row.id)"type="text" size="small">详情</el-button>
                </template>
                </el-table-column>
                </el-table>
                <!-- 表格 -->
            </el-tab-pane>
            <!--订单信息--> 
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
        this.findOrderbyId(this.$route.params.id)
    },
    computed: {
        ...mapState('order',['order7'])
    },
    methods: {
        ...mapActions('order',['findOrderbyId']),
        //返回上一级
        backHandler(){
            this.$router.push({name:'waiter'})
        }
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