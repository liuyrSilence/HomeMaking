import {get} from '../../http/axios'
export default {
    namespaced: true,
    state: {
        cash:''
    },
    getters: {
        
    },
    mutations: {
        refreshWaiterCash(state,cash){
            state.cash = cash
        }
    },
    actions: {
        async WaiterCash({commit},params){
            let response = await get('/waiter/waitercash',params)
            commit('refreshWaiterCash',response.data)
        }
    }
}