<template>
    <div class="comment">
        <briup-fullpagelayout title="我的评论" @back="backHandler">
            <!-- {{commentBycus}} -->
            <van-cell-group>
                <van-cell title="全部评价" :value="commentBycus.total" />
            </van-cell-group>
            <div class="card">顾客：{{info.id}}</div>
            <div class="card" v-for="c in commentBycus.list">
                <!-- {{info}} -->
                <div>订单：{{c.orderId}}</div>     
                <div>评论内容：{{c.content}}</div>
                <div>评论时间：{{c.commentTime | datefmt}}</div>
            </div>
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
        ...mapState('user',['info'])
    },
    methods:{
        ...mapActions('comment',['QueryComment','findAllCommentsBycus']),
        // 返回到订单列表页面
        backHandler(){
            this.$router.push({path:'/manager/user'})
        }
    }
}
</script>

<style>
.card{
  margin: .5em 1em;
  padding: .5em;
  border-radius: 5px;
  background: #ffffff;
}
</style>