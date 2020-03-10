import {get, post} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        waiterrealname:{}
    },
    mutations: {
        refreshRealname(state,waiterrealname){
            state.waiterrealname = waiterrealname
        }
    },
    actions: {
        async WaiterRealname({commit},params){
            let response = await post('/user/realname',params)
            commit('refreshRealname',response.data)
        }
    }
}