import {get, post} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        cusrealname:{}
    },
    mutations: {
        refreshRealname(state,cusrealname){
            state.cusrealname = cusrealname
        }
    },
    actions: {
        async CusomterRealname({commit},params){
            let response = await post('/user/realname',params)
            commit('refreshRealname',response.data)
        }
    }
}