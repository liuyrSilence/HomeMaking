<template>
  <div class="details">
    <el-link type="primary" @click="backHandler">返回</el-link>
    <div class="tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!--基本信息-->
        <el-tab-pane label="基本信息" name="first">
          <el-row class="demo-avatar demo-basic">
            <el-col :span="12">
              <div class="demo-basic--circle">
                <div class="block"><el-avatar :size="120" :src="'http://134.175.100.63:8686/'+waiter_id.imgPhoto" /></div>
              </div>
              <div class="sub-title">{{ this.waiter_id.realname }}</div>
              <div class="title">海纳百川，有容乃大</div>
              <div class="telephone">联系方式：{{ this.waiter_id.telephone }}</div>
              <div class="status">状态：{{ this.waiter_id.status }}</div>
              <div class="addrrs">地址：{{ this.waiter_id.province }}{{ this.waiter_id.city }}</div>
              <el-divider />
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--基本信息-->
        <!--订单信息-->
        <el-tab-pane label="订单信息" name="second">
          <!-- 表格 -->
          <el-table
            :data="order_w"
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
                <el-button type="text"size="small" @click="detailsHandler(scope.row.id)">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 表格 -->
        </el-tab-pane>
        <!--订单信息-->
        <!--收益信息-->
        <el-tab-pane label="收益信息" name="third">
          <!-- 表格 -->
          <el-table
            :data="shouyiDetailses"
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
              prop="money"
              label="金额"
            />
            <el-table-column
              align="center"
              prop="description"
              label="描述"
            />
            <el-table-column
              align="center"
              fixed="right"
              label="凭证"
            >
              <template slot-scope="scope">
                <el-image
                  style="width: 18px; height: 18px"
                  :src="'http://134.175.100.63:8686/'+scope.row.transferAccounts"
                  :fit="fit"
                />
              </template>
            </el-table-column>
          </el-table>
          <!-- 表格 -->
        </el-tab-pane>
        <!--收益信息-->
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  created() {
    this.findOrderbyId(this.$route.params.id)
    this.findwaiterById(this.$route.params.id)
    this.findOrderByWaiterId(this.$route.params.id)
    this.findAllorder()
    this.shouyiDetails(this.$route.params.id)
  },
  computed: {
    ...mapState('order', ['order7', 'order_w']),
    ...mapState('waiter', ['waiter_id', 'shouyiDetailses'])
  },
  methods: {
    ...mapActions('order', ['findOrderbyId', 'findOrderByWaiterId', 'findAllorder']),
    ...mapActions('waiter', ['findwaiterById', 'shouyiDetails']),
    // 返回上一级
    backHandler() {
      this.$router.push({ name: 'waiter' })
    },
    // 查看订单详情
    detailsHandler(id) {
      this.$router.push({ name: 'orderDetails', params: { id: id }})
    }
  }
}
</script>
<style scoped>
.tab{
    margin-top: 1em;
}
.btn{
    margin-top:1em;
}
.photo{
    width:88px;
    height:88px;
    border-radius: 44px;
}
.block{
  margin-left:115px;
  margin-top:28px;
}
.sub-title{
  margin-left:145px;
  margin-top:22px;
  font-size: 22px;
  font-weight: 600;
}
.title{
  margin-left: 112px;
  margin-top: 15px;
  font-size: 14px;
  color: #333;
}
.telephone{
  margin-left: 10px;
  margin-top: 38px;
  font-size: 15px;
  color: #333;
}
.status{
  margin-left: 10px;
  margin-top: 12px;
  font-size: 15px;
  color: #333;
}
.addrrs{
  margin-left: 10px;
  margin-top: 12px;
  font-size: 15px;
  color: #333;
}
</style>
