import {post} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        products:[]
    },
    getters: {
        productCustomerFilter(state){
            return(categoryId)=>{
                return state.products.filter(item=>item.categoryId === categoryId)
            }
        }
    },
    mutations :{
        refreshProducts(state,products){
            state.products = products
        }
    },
    actions :{
        // 查找所有商品分类信息
        async QueryProducts({commit},params) {
            let response = await post('/product/query',params)
            
            // console.log('response',response)
            commit('refreshProducts',response.data.list)
        }
    }
 }