import request from '@/utils/request'
import querystring from 'querystring'
export default{
    namespaced:true,
    state:{
        products:[]
    },
    mutations:{
        SET_PRODUCTS(state,products){
            state.products=products
        }
    },
    actions:{
        //查询所有订单
        findAllproduct({commit}){
            request.get('product/findAll').then((res)=>{
            commit('SET_PRODUCTS',res.data)
        })
        },
        //保存订单信息
        saveProduct({dispatch},productForm){
            request({
                method:'POST',
                url:'product/saveOrUpdate',
                'content-type':'application/x-www-form-urlencoded',
                data:querystring.stringify(productForm)
            }).then((res)=>{
                dispatch('findAllproduct')
            })
        },
        //删除顾客信息
        deleteProduct({dispatch},id){
            request.get('product/deleteById?id='+id).then((res)=>{
                dispatch('findAllproduct')
            })
        }
    }
}