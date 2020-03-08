import request from '@/utils/request'
import querystring from 'querystring'
export default {
  namespaced: true,
  state: {
    custermers: [],
    total: '',
    custermers_d: []
  },
  mutations: {
    SET_CUSTERMER(state, custermers) {
      state.custermers = custermers
    },
    SET_TOTAL(state, total) {
      state.total = total
    },
    SET_CUSTERMERS_D(state, custermers_d) {
      state.custermers_d = custermers_d
    }
  },
  actions: {
    // //分页查询
    queryCustermer({ commit }, queryForm) {
      request({
        method: 'POST',
        url: '/customer/query',
        'content-type': 'application/x-www-form-urlencoded',
        data: querystring.stringify(queryForm)
      }).then((res) => {
        commit('SET_CUSTERMER', res.data.list)
        commit('SET_TOTAL', res.data.total)
      })
    },
    // 查询所有顾客
    // findAllcustermer({commit}){
    //     request.get('/customer/findAll').then((res)=>{
    //     commit('SET_CUSTERMER',res.data)
    // })
    // },
    // 保存顾客信息
    saveCustermer({ dispatch }, custermerForm) {
      request({
        method: 'POST',
        url: '/customer/saveOrUpdate',
        'content-type': 'application/x-www-form-urlencoded',
        data: querystring.stringify(custermerForm)
      }).then((res) => {
        dispatch('queryCustermer', { page: 0, pageSize: 6 })
      })
    },
    // 删除顾客信息
    deleteCustermer({ dispatch }, id) {
      request.get('/customer/deleteById?id=' + id).then((res) => {
        dispatch('queryCustermer', { page: 0, pageSize: 6 })
      })
    },
    // 通过id查询顾客基本信息
    findCustomerById({ commit }, id) {
      request.get('/customer/findCustomerById?id=' + id).then((res) => {
        commit('SET_CUSTERMERS_D', res.data)
      })
    }
  }
}
