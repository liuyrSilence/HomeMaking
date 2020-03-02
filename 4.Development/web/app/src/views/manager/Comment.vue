<template>
    <div class="comment">
        <briup-fullpagelayout title="我的评论" @back="backHandler">
            <!-- {{commentBycus}} -->
            <van-cell-group>
                <van-cell class="all_comments" title="全部评价" :value="commentBycus.total" />
            </van-cell-group>
            <div class="card">
                <div class="card1">顾客：{{info.id}} & {{info.name}}</div>
                <div class="card2" v-for="c in commentBycus.list" :key='c.id'>
                    <!-- {{info}} -->
                    <van-row>
                        <van-col span="6">
                            <img style="width:5em" src="../../assets/user.png" alt=""/>
                        </van-col>
                        <van-col span="18">
                            <div>订单：{{c.orderId}}</div>     
                            <div style="padding-top:.5em;padding-bottom:.5em">评论内容：{{c.content}}</div>
                            <div>评论时间：{{c.commentTime | datefmt}}</div>
                        </van-col>
                    </van-row>
                </div>
            </div>
            <!-- {{JSON.parse($route.query.data).orderLines}} -->
        </briup-fullpagelayout>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            params:{
                page:0,
                pageSize:100
            }
        }
    },
    created() {
        this.params = {
            page:0,
            pageSize:100,
            cusId:this.info.id
        }
        this.QueryComment(this.params)

        this.findAllCommentsBycus(this.info.id)
    },
    computed: {
        ...mapState('comment',['comments','commentBycus']),
        ...mapState('user',['info']),
    },
    methods:{
        ...mapActions('comment',['QueryComment','findAllCommentsBycus','SaveComment']),
        // 返回到订单列表页面
        backHandler(){
            this.$router.push({path:'/manager/user'})
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
</style>