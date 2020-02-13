import request from '@/utils/request'
import querystring from 'querystring'
export default{
    namespaced:true,
    state:{
        custermers:[],
        total:''
    },
    mutations:{
        SET_CUSTERMER(state,custermers){
            state.custermers=custermers
        },
        SET_TOTAL(state,total){
            state.total=total
        }
    },
    actions:{
        // //分页查询
        queryCustermer({commit},queryForm){
            request({
                method:'POST',
                url:'/customer/query',
                'content-type':'application/x-www-form-urlencoded',
                data:querystring.stringify(queryForm)
            }).then((res)=>{
                commit('SET_CUSTERMER',res.data.list)
                commit('SET_TOTAL',res.data.total)
            })
        },
        //查询所有顾客
        // findAllcustermer({commit}){
        //     request.get('/customer/findAll').then((res)=>{
        //     commit('SET_CUSTERMER',res.data)
        // })
        // },
        //保存顾客信息
        saveCustermer({dispatch},custermerForm){
            request({
                method:'POST',
                url:'/customer/saveOrUpdate',
                'content-type':'application/x-www-form-urlencoded',
                data:querystring.stringify(custermerForm)
            }).then((res)=>{
                dispatch('findAllcustermer')
            })
        },
        //删除顾客信息
        deleteCustermer({dispatch},id){
            request.get('http://134.175.100.63:6677/customer/deleteById?id='+id).then((res)=>{
                dispatch('findAllcustermer')
            })
        }
    }
}