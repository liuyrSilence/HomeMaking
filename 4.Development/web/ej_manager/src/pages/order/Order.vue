<template>
  <div class="custermer">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!--所有订单-->
      <el-tab-pane label="所有订单" name="first">
        <!-- 表格 -->
        <el-table
          :data="order"
          stripe
          style="width: 100%"
        >
          <el-table-column
            align="center"
            prop="id"
            label="订单编号"
            width="80"
          />
          <el-table-column
            align="center"
            prop="orderTime"
            label="下单时间"
          />
          <el-table-column
            align="center"
            prop="total"
            label="总价"
          />
          <el-table-column
            align="center"
            prop="status"
            label="状态"
          />
          <el-table-column
            align="center"
            prop="customerId"
            label="顾客ID"
          />
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-button type="text"size="small" @click="details_Handler(scope.row.id)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格 -->
        <!-- 分页 -->
        <el-pagination
          layout="total,prev, pager, next"
          :page-size="this.list.pageSize"
          :total="total"
          @current-change="changePageNum"
        />
        <!-- 分页 -->
      </el-tab-pane>
      <!--所有订单-->

      <!--待支付-->
      <el-tab-pane label="待支付" name="second">
        <!-- 表格 -->
        <el-table
          :data="order1"
          stripe
          style="width: 100%"
        >
          <el-table-column
            align="center"
            prop="id"
            label="订单编号"
            width="80"
          />
          <el-table-column
            align="center"
            prop="orderTime"
            label="下单时间"
          />
          <el-table-column
            align="center"
            prop="total"
            label="总价"
          />
          <el-table-column
            align="center"
            prop="status"
            label="状态"
          />
          <el-table-column
            align="center"
            prop="customerId"
            label="顾客ID"
          />
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-button type="text"size="small" @click="details_Handler(scope.row.id)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格 -->
        <!-- 分页 -->
        <el-pagination
          layout="total,prev, pager, next"
          :page-size="this.list.pageSize"
          :total="a"
          @current-change="changePageNum"
        />
        <!-- 分页 -->
      </el-tab-pane>
      <!--待支付-->

      <!--待派单-->
      <el-tab-pane label="待派单" name="third">
        <!-- 表格 -->
        <el-table
          :data="order2"
          stripe
          style="width: 100%"
        >
          <el-table-column
            align="center"
            prop="id"
            label="订单编号"
            width="80"
          />
          <el-table-column
            align="center"
            prop="orderTime"
            label="下单时间"
          />
          <el-table-column
            align="center"
            prop="total"
            label="总价"
          />
          <el-table-column
            align="center"
            prop="status"
            label="状态"
          />
          <el-table-column
            align="center"
            prop="customerId"
            label="顾客ID"
          />
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="detailsHandler(scope.row.id)">派单</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格 -->
        <!-- 分页 -->
        <el-pagination
          layout="total,prev, pager, next"
          :page-size="this.list.pageSize"
          :total="b"
          @current-change="changePageNum"
        />
        <!-- 分页 -->
        <!-- 模态框 -->
        <el-dialog title="派单" :visible.sync="dialogFormVisible">
          <el-radio v-for="r in waiter" v-model="waiterId" :label="r.id">{{ r.realname }}</el-radio>
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
          style="width: 100%"
        >
          <el-table-column
            align="center"
            prop="id"
            label="订单编号"
            width="80"
          />
          <el-table-column
            align="center"
            prop="orderTime"
            label="下单时间"
          />
          <el-table-column
            align="center"
            prop="total"
            label="总价"
          />
          <el-table-column
            align="center"
            prop="status"
            label="状态"
          />
          <el-table-column
            align="center"
            prop="customerId"
            label="顾客ID"
          />
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-button type="text"size="small" @click="details_Handler(scope.row.id)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格 -->
        <!-- 分页 -->
        <el-pagination
          layout="total,prev, pager, next"
          :page-size="this.list.pageSize"
          :total="c"
          @current-change="changePageNum"
        />
        <!-- 分页 -->
      </el-tab-pane>
      <!--待接单-->

      <!--待服务-->
      <el-tab-pane label="待服务" name="five">
        <!-- 表格 -->
        <el-table
          :data="order4"
          stripe
          style="width: 100%"
        >
          <el-table-column
            align="center"
            prop="id"
            label="订单编号"
            width="80"
          />
          <el-table-column
            align="center"
            prop="orderTime"
            label="下单时间"
          />
          <el-table-column
            align="center"
            prop="total"
            label="总价"
          />
          <el-table-column
            align="center"
            prop="status"
            label="状态"
          />
          <el-table-column
            align="center"
            prop="customerId"
            label="顾客ID"
          />
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-button type="text"size="small" @click="details_Handler(scope.row.id)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格 -->
        <!-- 分页 -->
        <el-pagination
          layout="total,prev, pager, next"
          :page-size="this.list.pageSize"
          :total="d"
          @current-change="changePageNum"
        />
        <!-- 分页 -->
      </el-tab-pane>
      <!--待服务-->

      <!--待确认-->
      <el-tab-pane label="待确认" name="six">
        <!-- 表格 -->
        <el-table
          :data="order5"
          stripe
          style="width: 100%"
        >
          <el-table-column
            align="center"
            prop="id"
            label="订单编号"
            width="80"
          />
          <el-table-column
            align="center"
            prop="orderTime"
            label="下单时间"
          />
          <el-table-column
            align="center"
            prop="total"
            label="总价"
          />
          <el-table-column
            align="center"
            prop="status"
            label="状态"
          />
          <el-table-column
            align="center"
            prop="customerId"
            label="顾客ID"
          />
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-button type="text"size="small" @click="details_Handler(scope.row.id)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格 -->
        <!-- 分页 -->
        <el-pagination
          layout="total,prev, pager, next"
          :page-size="this.list.pageSize"
          :total="e"
          @current-change="changePageNum"
        />
        <!-- 分页 -->
      </el-tab-pane>
      <!--待确认-->

      <!--已完成-->
      <el-tab-pane label="已完成" name="seven">
        <!-- 表格 -->
        <el-table
          :data="order6"
          stripe
          style="width: 100%"
        >
          <el-table-column
            align="center"
            prop="id"
            label="订单编号"
            width="80"
          />
          <el-table-column
            align="center"
            prop="orderTime"
            label="下单时间"
          />
          <el-table-column
            align="center"
            prop="total"
            label="总价"
          />
          <el-table-column
            align="center"
            prop="status"
            label="状态"
          />
          <el-table-column
            align="center"
            prop="customerId"
            label="顾客ID"
          />
          <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="150"
          >
            <template slot-scope="scope">
              <el-button type="text"size="small" @click="details_Handler(scope.row.id)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表格 -->
        <!-- 分页 -->
        <el-pagination
          layout="total,prev, pager, next"
          :page-size="this.list.pageSize"
          :total="f"
          @current-change="changePageNum"
        />
        <!-- 分页 -->
      </el-tab-pane>
      <!--已完成-->
    </el-tabs>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      list: {
        page: 0,
        pageSize: 6
      },
      activeName: 'first',
      dialogFormVisible: false,
      waiterId: '',
      orderId: ''
    }
  },
  created() {
    this.findAllorder()
    this.queryOrder(this.list)
    this.findAllwaiter()
  },
  computed: {
    ...mapState('order', ['a', 'b', 'c', 'd', 'e', 'f', 'total', 'order', 'order1', 'order2', 'order3', 'order4', 'order5', 'order6']),
    ...mapState('waiter', ['waiters','waiter'])
  },
  methods: {
    ...mapActions('order', ['findAllorder', 'sendOrder', 'queryOrder']),
    ...mapActions('waiter', ['findAllwaiter']),
    // 派单
    detailsHandler(id) {
      this.findAllwaiter()
      this.orderId = id
      this.dialogFormVisible = true
    },
    // 关闭模态框
    close() {
      this.dialogFormVisible = false
    },
    // 派单
    submit() {
      const orderForm = {
        orderId: this.orderId,
        waiterId: this.waiterId
      }
      console.log(orderForm)
      this.sendOrder(orderForm)
      this.dialogFormVisible = false
      this.$message({
        showClose: true,
        message: '派单成功',
        type: 'success'
      })
    },
    // 分页
    changePageNum(page) {
      this.list.page = page - 1
      this.queryOrder(this.list)
    },
    // 订单详情
    details_Handler(id) {
      this.$router.push({ name: 'orderDetails', params: { id: id }})
    }
  }
}
</script>
