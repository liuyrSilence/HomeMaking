import {get, post} from '../../http/axios'
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
        },
        // 添加修改地址
        async SaveOrUpdateAddress({dispatch},form){
            let response = await post('/address/saveOrUpdate',form)
            dispatch('findAllAddresses')
            return response
        },
        // 删除地址
        async deleteAddressById({dispatch},id){
            let response = await get('/address/deleteById',{id})
            // console.log("id",response.data)
            dispatch('findAllAddresses',response.data)
        }
    }
}