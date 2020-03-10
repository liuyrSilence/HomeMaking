import {get, post} from '../../http/axios'
export default {
    namespaced: true,
    state: {
        vercode:'',
        waiterInfo:{}
    },
    mutations: {
        // 通过refreshGetVcode，去修改state的vcode
        refreshGetVcode(state,vercode){
            state.vercode = vercode
        },
        refreshRegister(state,waiterInfo){
            state.waiterInfo = waiterInfo
        }
    },
    actions: {
        // 员工完后注册页面
        async WaiterRegister({commit},params){
            let response = await post('/waiter/waiterRegister',params)
            commit('refreshRegister',response.data)
        },
        // 获取验证码
        async GetWaiterVcode({commit},params){
            let response = await get('/waiter/getVerCode',params)
            commit('refreshGetVcode',response.data)
        }
    }
}