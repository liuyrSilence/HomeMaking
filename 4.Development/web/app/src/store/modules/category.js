import {get} from '../../http/axios'
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
        }
    }
 }