import {get} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        vercode:'',
        cusregister:{}
    },
    mutations: {
        refreshVcode(state,vercode){
            state.vercode = vercode
        },
        refreshCusRegister(state,cusregister){
            state.cusregister = cusregister
        }
    },
    actions: {
        // 顾客进行注册
        async CustomerRegister({commit},params){
            let response = await get('/customer/customerRegister',params)
            commit('refreshCusRegister',response.data)
        },
        // 获取验证码
        async GetVerCode({commit},telephone){
            let response = await get('/customer/getVerCode',telephone)
            commit('refreshVcode',response.data)
        }
    }
}