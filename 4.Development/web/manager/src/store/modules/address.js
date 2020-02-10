import request from '@/utils/request'
export default{
    namespaced:true,
    state:{
        addresses:[]
    },
    mutations:{
        SET_ADDRESSES(state,addresses){
            state.addresses=addresses
        }
    },
    actions:{
        //根据id查询地址
        findAddressById({commit},id){
            request.get('address/findByCustomerId?id='+id).then((res)=>{
                commit('SET_ADDRESSES',res.data)
            })
        }
    }
}