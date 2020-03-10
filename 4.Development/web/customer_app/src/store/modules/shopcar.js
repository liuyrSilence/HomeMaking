import _ from 'lodash'
export default {
    namespaced: true,
    state: {
        // 通过productId --> {productId,productName,price,number}
        orderLines:new Map()
    },
    getters: {
        // 计算总额
        total(state){
            let result = 0;
            for(let orderLine of state.orderLines.values()){
                result += orderLine.price * orderLine.number;
            }
            return result;
        }
    },
    mutations: {
        // 添加购物车
        addShopcar(state,orderLine){
            state.orderLines.set(orderLine.productId,orderLine);
            // 克隆对象改变引用地址，让监听机制监听到orderLines的变化
            state.orderLines = _.clone(state.orderLines)
        },
        // 清空购物车
        clearShopcar(state){
            state.orderLines.clear();
            state.orderLines = _.clone(state.orderLines)
        }
    },
    actions: {
        
    }
}