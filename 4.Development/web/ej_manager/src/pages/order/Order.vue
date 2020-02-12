<template>
    <div class="custermer">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <!--所有订单-->
            <el-tab-pane label="所有订单" name="first">
                <!-- 表格 -->
                <el-table
                :data="order"
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
            <!--所有订单-->

            <!--待支付-->
            <el-tab-pane label="待支付" name="second">
                <!-- 表格 -->
                <el-table
                :data="order1"
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
            <!--待支付-->

            <!--待派单-->
            <el-tab-pane label="待派单" name="third">
                <!-- 表格 -->
                <el-table
                :data="order2"
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
                    <el-button @click="detailsHandler(scope.row.id)" type="text" size="small">派单</el-button>
                </template>
                </el-table-column>
                </el-table>
                <!-- 表格 -->
                <!-- 模态框 -->
                <el-dialog title="派单" :visible.sync="dialogFormVisible">
                {{waiterId}}
                    <el-radio v-for='r in waiters' v-model="waiterId" :label="r.id" >{{r.realname}}</el-radio>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="close">取 消</el-button>
                    <el-button type="primary" @click="submit('orderId')">确 定</el-button>
                </div>
                </el-dialog>
                <!-- 模态框 -->
            </el-tab-pane>
            <!--待派单-->

            <!--待接单-->
            <el-tab-pane label="待接单" name="fourth">
                <!-- 表格 -->
                <el-table
                :data="order3"
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
            <!--待接单-->

            <!--待服务-->
            <el-tab-pane label="待服务" name="five">
                                <!-- 表格 -->
                <el-table
                :data="order4"
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
            <!--待服务-->

            <!--待确认-->
            <el-tab-pane label="待确认" name="six">
                <!-- 表格 -->
                <el-table
                :data="order5"
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
            <!--待确认-->

            <!--已完成-->
            <el-tab-pane label="已完成" name="seven">
                <!-- 表格 -->
                <el-table
                :data="order6"
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
            <!--已完成-->
        </el-tabs>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            activeName:'first',
            dialogFormVisible:false,
            waiterId:'',
            orderId:''
        }
    },
    created() {
        this.findAllorder()
        this.findAllwaiter()
    },
    computed: {
        ...mapState('order',['order','order1','order2','order3','order4','order5','order6']),
        ...mapState('waiter',['waiters'])
    },
    methods: {
        ...mapActions('order',['findAllorder','sendOrder']),
        ...mapActions('waiter',['findAllwaiter']),
        //派单
        detailsHandler(id){
            this.orderId=id
            this.dialogFormVisible=true
        },
        //关闭模态框
        close(){
            this.dialogFormVisible=false
        },
        //派单
        submit(){
            let orderForm={
                orderId:this.orderId,
                waiterId:this.waiterId
            }
            console.log(orderForm)
            this.sendOrder(orderForm)
            this.dialogFormVisible=false
            this.$message({
            showClose: true,
            message: '派单成功',
            type: 'success'
            });
        }
    },
}
</script>