<template>
    <div class="details">
        <briup-fullpagelayout title="订单详情" @back="backHandler">
            <!-- {{JSON.parse($route.query.data).orderLines}} -->
            <!-- 头像 -->
            <div class="photo">
                <img src="../../../assets/user.png" alt=""/>
            </div>
            <!-- <div>
            员工姓名：{{JSON.parse($route.query.data).waiter.realname}}
            </div>
            <div >
            员工联系方式：{{JSON.parse($route.query.data).waiter.telephone}}
            </div> -->
            <div class="order_details">
                <div>
                <van-row v-for="line of JSON.parse($route.query.data).orderLines.values()" :key="line.productId">
                        <van-col :span="8">产品名称：{{line.product.name}}</van-col>
                        <van-col :span="8">下单数量：x{{line.number}}</van-col>
                    </van-row>
                </div>
                <div>总价：{{JSON.parse($route.query.data).total}} 元</div>
                <div>服务时间：{{JSON.parse($route.query.data).orderTime | datefmt}} </div>
                <div >服务地点：
                {{JSON.parse($route.query.data).address.province}}
                {{JSON.parse($route.query.data).address.city}}
                {{JSON.parse($route.query.data).address.area}}
                {{JSON.parse($route.query.data).address.address}}
                </div>
            </div>
            <div class="my_comment">
            我的评价：<van-button style="margin-left:20em"
                            plain type="warning" 
                            size="mini" 
                            @click="showPopup">评论
                        </van-button>
            </div>               
            <div class="card1">顾客：{{info.id}} & {{info.name}}</div>
            <div class="card2" v-for="c in comments.list" :key='c.id'>
                <!-- {{info}} -->
                <van-row>
                    <van-col span="6">
                        <img style="width:5em" src="../../../assets/user.png" alt=""/>
                    </van-col>
                    <van-col span="18">
                        <div>订单：{{c.orderId}}</div>     
                        <div style="padding-top:.5em;padding-bottom:.5em">评论内容：{{c.content}}</div>
                        <div>评论时间：{{c.commentTime | datefmt}}</div>
                    </van-col>
                </van-row>
            </div>
            <!-- {{orders}} -->
        </briup-fullpagelayout>
        <!-- 模态框 -->
        <van-popup v-model="show" style="width:20em">
            <!-- 获取当前订单号以及顾客编号 -->
            <van-field v-model="cusId" label="顾客编号：" />
            <van-field v-model="orderId" label="订单编号：" />
            <!-- {{content}} -->
            <van-field v-model="content"
                rows="4"
                autosize
                type="textarea"
                label="评论内容" 
                maxlength="200"
                show-word-limit
                placeholder="请输入评论内容" />
            <van-cell-group>
                <van-button 
                    style="margin:1em 2em"
                    type="info" 
                    size="small" 
                    @click="saveCommentHandler()">确认
                </van-button>
            </van-cell-group>
        </van-popup>
        <!-- /模态框 -->
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            params: {
                page:0,
                pageSize:100,
            },
            show: false,
            content:'',
            cusId:'',
            orderId:''
        }
    },
    created() {
        this.params = {
            page:0,
            pageSize:100,
            cusId:this.info.id,
            orderid:JSON.parse(this.$route.query.data).id
        }
        this.QueryComment(this.params)

        this.cusId = this.info.id
        this.orderId = JSON.parse(this.$route.query.data).id
    },
    computed: {
        ...mapState('comment',['comments']),
        ...mapState('user',['info']),
    },
    methods:{
        ...mapActions('comment',['QueryComment','SaveComment']),
        // 添加评论
        saveCommentHandler(){
            this.show = false;
            let form = {
                cusId:this.cusId,
                orderId:this.orderId,
                content:this.content
            }
            this.SaveComment(form).then((response)=>{
                this.QueryComment(this.params)
            })
            
        },
        // 弹出模态框
        showPopup(){
            this.show = true;
        },
        // 返回到订单列表页面
        backHandler(){
            this.$router.push({path:'/manager/order'})
        }
    }
}
</script>

<style scoped>
.all_comments{
    margin-top:1em;
    padding: .5em;
    border-radius: 5px;
    background: #f1f1f1;
}
.card2{
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #f1f1f1;
}
.card1{
  margin: 1em;
}
.my_comment{
    margin:1em;
    padding-left: .5em;
}
.card{
    margin-top:1em;
    padding: .5em;
    border-radius: 5px;
    background: #f1f1f1;
}
.order_details{
    margin: 1em 1em;
    padding: .5em;
    border-radius: 5px;
    background: #f1f1f1;
    /* border: 1px solid #f1f1f1; */
}
.photo {
  margin: 0 auto;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  box-sizing: border-box;
  border:1px solid #ccc;
  overflow:hidden;
  padding: .5em;
  margin-top:2em;
  margin-bottom:2em
}
</style>