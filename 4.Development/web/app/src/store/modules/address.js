import {get} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        addresses:[]
    },
    mutations: {
        refreshAddresses(state,addresses){
            state.addresses = addresses;
        }
    },
    actions: {
        // 根据当前用户id查询所有地址
        async findAllAddresses({commit,rootState}){
            // console.log('rootState',rootState)
            let id = rootState.user.info.id
            let response = await get('/address/findByCustomerId',{id})
            commit('refreshAddresses',response.data)
        }
    }
}