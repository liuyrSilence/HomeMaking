import request from '@/utils/request'
import querystring from 'querystring'
export default{
    namespaced:true,
    state:{
        custermers:[]
    },
    mutations:{
        SET_CUSTERMER(state,custermers){
            state.custermers=custermers
        }
    },
    actions:{
        //查询所有顾客
        findAllcustermer({commit}){
            request.get('http://134.175.100.63:6677/customer/findAll').then((res)=>{
            commit('SET_CUSTERMER',res.data)
        })
        },
        //保存顾客信息
        saveCustermer({dispatch},custermerForm){
            request({
                method:'POST',
                url:'http://134.175.100.63:6677/customer/saveOrUpdate',
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