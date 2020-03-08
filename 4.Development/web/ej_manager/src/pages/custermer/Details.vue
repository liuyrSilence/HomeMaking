<template>
  <div class="details">
    <el-link type="primary" @click="backHandler">返回</el-link>
    <div class="tab">
      <el-tabs v-model="activeName" >
        <!--基本信息-->
        <el-tab-pane label="基本信息" name="first">
          <el-row class="demo-avatar demo-basic">
            <el-col :span="12">
              <div class="demo-basic--circle">
                <div class="block"><el-avatar :size="120" :src="'http://134.175.100.63:8686/'+custermers_d.imgPhoto" /></div>
              </div>
              <div class="sub-title">{{ this.custermers_d.realname }}</div>
              <div class="title">海纳百川，有容乃大</div>
              <div class="telephone">联系方式：{{ this.custermers_d.telephone }}</div>
              <div class="status">状态：{{ this.custermers_d.status }}</div>
              <div class="addrrs">地址：{{ this.custermers_d.province }}{{ this.custermers_d.city }}</div>
              <el-divider />
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--基本信息-->
        <!--订单信息-->
        <el-tab-pane label="订单信息" name="second">
          <!-- 表格 -->
          <el-table
            :data="orders_c"
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
                <el-button type="text" size="small" @click="detailsHandler(scope.row.id)">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 表格 -->
        </el-tab-pane>
        <!--订单信息-->

        <!--服务地址-->
        <el-tab-pane label="服务地址" name="third">
          <!--表格-->
          <el-table
            :data="addresses"
            stripe
            style="width: 100%"
          >
            <el-table-column
              align="center"
              prop="id"
              label="编号"
              width="80"
            />
            <el-table-column
              align="center"
              prop="province"
              label="省"
            />
            <el-table-column
              align="center"
              prop="city"
              label="市"
            />
            <el-table-column
              align="center"
              prop="area"
              label="区/县"
            />
            <el-table-column
              align="center"
              prop="address"
              label="街道"
            />
            <el-table-column
              align="center"
              prop="telephone"
              label="手机号"
            />
          </el-table>
          <!--表格-->
          <!--按钮-->

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
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  created() {
    this.findAddressById(this.$route.params.id)
    this.findCustomerById(this.$route.params.id)
    this.findOrderByCustormerId(this.$route.params.id)
  },
  computed: {
    ...mapState('address', ['addresses']),
    ...mapState('custermer', ['custermers_d']),
    ...mapState('order', ['orders_c'])
  },
  methods: {
    ...mapActions('address', ['findAddressById']),
    ...mapActions('custermer', ['findCustomerById']),
    ...mapActions('order', ['findOrderByCustormerId']),
    // 返回上一级
    backHandler() {
      this.$router.push({ name: 'custermer' })
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
  margin-left:117px;
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
