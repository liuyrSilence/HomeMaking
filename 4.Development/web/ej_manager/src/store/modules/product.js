import request from '@/utils/request'
import querystring from 'querystring'
export default {
  namespaced: true,
  state: {
    products: [],
    total: ''
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_TOTAL(state, total) {
      state.total = total
    }
  },
  actions: {
    // 查询所有订单
    // findAllproduct({commit}){
    //     request.get('product/findAll').then((res)=>{
    //     commit('SET_PRODUCTS',res.data)
    // })
    // },
    // 分页查询产品信息
    queryProduct({ commit }, list) {
      request({
        method: 'POST',
        url: '/product/query',
        data: querystring.stringify(list)
      }).then((res) => {
        commit('SET_PRODUCTS', res.data.list)
        commit('SET_TOTAL', res.data.total)
      })
    },
    // 保存订单信息
    saveProduct({ dispatch }, productForm) {
      request({
        method: 'POST',
        url: 'product/saveOrUpdate',
        'content-type': 'application/x-www-form-urlencoded',
        data: querystring.stringify(productForm)
      }).then((res) => {
        dispatch('queryProduct', { page: 0, pageSize: 6 })
      })
    },
    // 删除顾客信息
    deleteProduct({ dispatch }, id) {
      request.get('product/deleteById?id=' + id).then((res) => {
        dispatch('queryProduct', { page: 0, pageSize: 6 })
      })
    }
  }
}
