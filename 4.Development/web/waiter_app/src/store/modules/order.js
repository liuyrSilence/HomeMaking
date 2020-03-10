import {get} from '../../http/axios'
export default {
    namespaced:true,
    state: {
        orders:[]
    },
    getters: {
        // 使用过滤器，根据订单状态进行分类
        ordersStatusFilter(state){
            return (status) => { 
                return state.orders.filter(order=>order.status === status)
            }
        },
    },
    mutations: {
        refreshWaiterOrders(state,orders){
            state.orders = orders
        }
    },
    actions: {
        // 完成订单
        async completeOrder({dispatch},orderId){
            let response = get('/order/serviceCompleteOrder',{orderId})
            dispatch('FindWaiterOrders')
            return response
        },
        // 拒绝订单
        async rejectOrder({dispatch},orderId){
            let response = await get('/order/rejectOrder',{orderId})
            dispatch('FindWaiterOrders')
            return response
        },
        // 接受订单
        async acceptOrder({dispatch},params){
            let response = await get('/order/takeOrder',params)
            dispatch('FindWaiterOrders')
            return response
        },
        // 查询所有订单
        async FindWaiterOrders({commit,rootState}){
            let waiterId = rootState.user.info.id
            let response = await get('/order/query',{waiterId});
            commit('refreshWaiterOrders',response.data)
          },
    }
}