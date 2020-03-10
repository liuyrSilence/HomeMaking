import {get, post, post_obj_array} from '../../http/axios'
export default {
    namespaced: true,
    state:{
        orders:[],
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
        },
    },
    actions: {
        
        async payHandler({dispatch},params){
            // console.log(params,'===')
            let url = 'http://134.175.100.63:5588/order/paymoney?orderid='+params.orderid+'&customer_id='+params.customer_id+'&order_name=%E8%A3%A4%E5%AD%90&order_money='+params.order_money+'&description=%E5%B9%B2%E5%87%80'
            window.open(url,'_blank')
        },
        // 确认订单
        async ConfirmOrder({dispatch},orderId){
            let response = await get('/order/confirmOrder?orderId='+orderId)
            dispatch('findAllOrders')
            // return response
        },
        // 保存订单
        async SaveOrder({commit},data){
            // let data = {
            //     customerId:rootState.user.info.id,
            //     addressId:rootState.address.addresses[0].id,
            //     orderLines:Array.from(rootState.shopcar.orderLines.values())
            // }
            // 调用接口完后保存
            let response = await post_obj_array('/order/save',data)
            // console.log("data",data)
            // 清空购物车
            commit('shopcar/clearShopcar',null,{root:true})
            return response
        },
        // 查询所有订单
        async findAllOrders({commit,rootState}){
            let customerId = rootState.user.info.id
            let response = await get('/order/query',{customerId});
            commit('refreshOrder',response.data)
          },
    }
}