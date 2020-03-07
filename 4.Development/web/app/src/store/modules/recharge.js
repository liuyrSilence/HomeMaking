import {get} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        charge:''
    },
    mutations: {
        refreshRecharge(state,charge){
            state.charge = charge
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