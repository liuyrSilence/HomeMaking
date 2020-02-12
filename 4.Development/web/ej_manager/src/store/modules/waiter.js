import request from '@/utils/request'
import querystring from 'querystring'
export default{
    namespaced:true,
    state:{
        waiters:[]
    },
    mutations:{
        SET_WAITER(state,waiters){
            state.waiters=waiters
        }
    },
    actions:{
        //查询所有员工
        findAllwaiter({commit}){
            request.get('waiter/findAll').then((res)=>{
            commit('SET_WAITER',res.data)
        })
        },
        //保存顾客信息
        saveWaiter({dispatch},custermerForm){
            request({
                method:'POST',
                url:'/waiter/saveOrUpdate',
                'content-type':'application/x-www-form-urlencoded',
                data:querystring.stringify(custermerForm)
            }).then((res)=>{
                dispatch('findAllwaiter')
            })
        },
        //删除顾客信息
        deleteWaiter({dispatch},id){
            request.get('/waiter/deleteById?id='+id).then((res)=>{
                dispatch('findAllwaiter')
            })
        }
    }
}