<template>
    <div class="help">
        <!-- 标题 -->
        <div class="title">
            <van-nav-bar title="使用帮助" />
        </div>
        <!-- /标题 -->
        <!-- 常见问题 -->
        <van-cell-group>
            <van-cell icon="fire" color="warning" title="常见问题" />
        </van-cell-group>
        <div class="list_problems">
            <van-cell-group>
                <van-cell title="1.优惠券如何使用？" />
            </van-cell-group>
            <van-cell-group>
                <van-cell title="2.取消订单后钱什么时候到账？" />
            </van-cell-group>
            <van-cell-group>
                <van-cell title="3.可以固定同一个阿姨服务吗？" />
            </van-cell-group>
            <van-cell-group>
                <van-cell title="4.如何选择上一次服务的阿姨？" />
            </van-cell-group>
            <van-cell-group>
                <van-cell title="5.预约成功后在哪查看？" />
            </van-cell-group>
        </div>
        <!-- /常见问题 -->

        <!-- 更多问题 -->
        <van-cell-group>
            <van-cell icon="fire" color="warning" title="更多问题" />
        </van-cell-group>
        <van-grid :column-num="3">
            <van-grid-item text="订单相关" />
            <van-grid-item text="客户端使用" />
            <van-grid-item text="优惠券与活动" />
        </van-grid>
        <van-grid :column-num="3">
            <van-grid-item text="支付与费用" />
            <van-grid-item text="服务相关" />
            <van-grid-item text="" />
        </van-grid>
        <!-- /更多问题 -->
    </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  methods:{
    
  },
  computed:{
      
  }
}
</script>

<style>
.list_problems .van-cell{
    color:#646566
}
.van-grid-item{
    line-height:3em;
    border: 1px solid #f1f1f1
}
</style>