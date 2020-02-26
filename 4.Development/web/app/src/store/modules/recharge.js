import {get} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        money:''
    },
    mutations: {
        refreshRecharge(state,money){
            state.money = money
        }
    },
    actions: {
        // 充值
        async CustomerRecharge({commit},params){
            let response = await get('/customer/recharge',params)
            commit('refreshRecharge',response.data)
        }
    }
}