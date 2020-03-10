<template>
    <briup-fulllayout title="添加地址">
        <div>
            {{form}}
            <van-cell-group>
                <van-field v-model="form.telephone" placeholder="请输入手机号"></van-field>
            </van-cell-group>
            <van-cell-group>
                <van-field v-model="form.province" placeholder="请输入省"></van-field>
            </van-cell-group>
            <van-cell-group>
                <van-field v-model="form.city" placeholder="请输入市"></van-field>
            </van-cell-group>
            <van-cell-group>
                <van-field v-model="form.area" placeholder="请输入区"></van-field>
            </van-cell-group>
            <van-cell-group>
                <van-field v-model="form.address" placeholder="请输入详细地址"></van-field>
            </van-cell-group>
            <van-button type='primary' block @click="submitHandler">保存</van-button>
        </div>
    </briup-fulllayout>
</template>

<script>
import {mapState} from 'vuex'
import {get,post} from '../../../http/axios'
export default {
    data(){
        return{
            form:{}
        }
    },
    computed:{
        ...mapState('user',['info'])
    },
    methods:{
        submitHandler(){
            this.form.customerId = this.info.id
            post('/address/saveOrUpdate',this.form).then((res)=>{
                this.$router.go(-1)
                this.$toast.success(res)
            })
        }
    },
    created(){

    }
}
</script>