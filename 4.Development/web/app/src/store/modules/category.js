import {get,post} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        categories:[]
    },
    mutations :{
        refreshCategories(state,categories){
            state.categories = categories
        }
    },
    actions :{
        // 查找所有商品分类信息
        async findAllCategories({commit}) {
            let response = await get('/category/findAll')
            // console.log('response',response)
            commit('refreshCategories',response.data)
        },
        // 分页查询商品栏目信息
        async QueryCategories({commit},params){
            let response = await post('/category/query',params)
            commit('refreshCategories',response.data)
        }
    }
 }