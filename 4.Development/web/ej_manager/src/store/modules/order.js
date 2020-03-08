import request from '@/utils/request'
import querystring from 'querystring'
export default {
  namespaced: true,
  state: {
    order: [],
    order1: [],
    order2: [],
    order3: [],
    order4: [],
    order5: [],
    order6: [],
    order7: [],
    total: '',
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    orderbyid: {},
    orders_c: [],
    orders_w: []
  },
  mutations: {
    SET_ORDER(state, order) {
      state.order = order
    },
    SET_ORDER1(state, order1) {
      state.order1 = order1
    },
    SET_ORDER2(state, order2) {
      state.order2 = order2
    },
    SET_ORDER3(state, order3) {
      state.order3 = order3
    },
    SET_ORDER4(state, order4) {
      state.order4 = order4
    },
    SET_ORDER5(state, order5) {
      state.order5 = order5
    },
    SET_ORDER6(state, order6) {
      state.order6 = order6
    },
    SET_ORDER7(state, order7) {
      state.order7 = order7
    },
    SET_TOTAL(state, total) {
      state.total = total
    },
    SET_A(state, a) {
      state.a = a
    },
    SET_B(state, b) {
      state.b = b
    },
    SET_C(state, c) {
      state.c = c
    },
    SET_D(state, d) {
      state.d = d
    },
    SET_E(state, e) {
      state.e = e
    },
    SET_F(state, f) {
      state.f = f
    },
    SET_ORDERID(state, orderbyid) {
      state.orderbyid = orderbyid
    },
    SET_ORDERBYCUSTOMERID(state, orders_c) {
      state.orders_c = orders_c
    },
    SET_ORDERBYWAITERID(state, order_w) {
      state.order_w = order_w
    }
  },
  actions: {
    // 查询所有订单
    findAllorder({ commit }) {
      request.get('/order/findAll').then((res) => {
        const itme = res.data
        let a = 0
        let b = 0
        let c = 0
        let d = 0
        let e = 0
        let f = 0
        for (let i = 0; i < itme.length; i++) {
          if (itme[i].status === '待支付') {
            a++
          } else if (itme[i].status === '待派单') {
            b++
          } else if (itme[i].status === '待接单') {
            c++
          } else if (itme[i].status === '待服务') {
            d++
          } else if (itme[i].status === '待确认') {
            e++
          } else if (itme[i].status === '已完成') {
            f++
          }
        }
        commit('SET_A', a)
        commit('SET_B', b)
        commit('SET_C', c)
        commit('SET_D', d)
        commit('SET_E', e)
        commit('SET_F', f)
      })
    },
    // 分页查询
    queryOrder({ commit }, list) {
      request({
        method: 'POST',
        url: '/order/queryPage',
        data: querystring.stringify(list)
      }).then((res) => {
        commit('SET_ORDER', res.data.list)
        commit('SET_TOTAL', res.data.total)
        const itme = res.data.list
        const arr1 = []
        const arr2 = []
        const arr3 = []
        const arr4 = []
        const arr5 = []
        const arr6 = []
        const a = 0
        for (let i = 0; i < itme.length; i++) {
          if (itme[i].status === '待支付') {
            arr1.push(itme[i])
          } else if (itme[i].status === '待派单') {
            arr2.push(itme[i])
          } else if (itme[i].status === '待接单') {
            arr3.push(itme[i])
          } else if (itme[i].status === '待服务') {
            arr4.push(itme[i])
          } else if (itme[i].status === '待确认') {
            arr5.push(itme[i])
          } else if (itme[i].status === '已完成') {
            arr6.push(itme[i])
          }
        }
        commit('SET_ORDER1', arr1)
        commit('SET_ORDER2', arr2)
        commit('SET_ORDER3', arr3)
        commit('SET_ORDER4', arr4)
        commit('SET_ORDER5', arr5)
        commit('SET_ORDER6', arr6)
      })
    },
    // 派单
    sendOrder({ dispatch }, orderForm) {
      request.get('/order/sendOrder', {
        params: orderForm
      }).then(() => {
        dispatch('queryOrder', { page: 0, pageSize: 6 })
      })
    },
    // 通过id查询订单
    findOrderbyId({ commit }, id) {
      request.get('/order/findById?id=' + id).then((res) => {
        commit('SET_ORDERID', res.data)
      })
    },
    // 通过顾客id查询订单信息
    findOrderByCustormerId({ commit }, customerId) {
      request.get('/order/query?customerId=' + customerId).then((res) => {
        commit('SET_ORDERBYCUSTOMERID', res.data)
      })
    },
    // 通过员工id查询订单信息
    findOrderByWaiterId({ commit }, waiterId) {
      request.get('/order/query?waiterId=' + waiterId).then((res) => {
        commit('SET_ORDERBYWAITERID', res.data)
      })
    }
  }
}
