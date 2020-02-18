import {get, post, post_obj_array} from '../../http/axios'
export default {
    namespaced: true,
    state:{
        orders:[]
    },
    getters: {
        // 根据订单状态进行分类过滤
        ordersStatusFilter(state){
            return (status)=>{
              return state.orders.filter(order=>order.status === status)
            }
        }
    },
    mutations: {
        refreshOrder(state,orders){
            state.orders = orders
        }
    },
    actions: {
        // 保存订单
        async SaveOrder({commit,rootState}){
            let data = {
                customerId:rootState.user.info.id,
                addressId:rootState.address.addresses[0].id,
                orderLines:Array.from(rootState.shopcar.orderLines.values())
            }
            // 调用接口完后保存
            let response = await post_obj_array('/order/save',data)
            console.log("data",data)
            // 清空购物车
            commit('shopcar/clearShopcar',null,{root:true})
            return response
        },
        // 查询所有订单
        async findAllOrders({commit,rootState}){
            let customerId = rootState.user.info.id
            let response = await get('/order/query',{customerId});
            commit('refreshOrder',response.data)
          }
    }
}