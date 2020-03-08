import request from '@/utils/request'
import querystring from 'querystring'
export default {
  namespaced: true,
  state: {
    comments: [],
    total: ''
  },
  mutations: {
    SET_COMMENT(state, comments) {
      state.comments = comments
    },
    SET_TOTAL(state, total) {
      state.total = total
    }
  },
  actions: {
    // 分页查询
    queryProduct({ commit }, list) {
      request({
        method: 'POST',
        url: '/comment/query',
        data: querystring.stringify(list)
      }).then((res) => {
        commit('SET_COMMENT', res.data.list)
        commit('SET_TOTAL', res.data.total)
      })
    },
    // 查询所有评论
    // findComment({commit}){
    //     request.get('/comment/findAll').then((res)=>{
    //         commit('SET_COMMENT',res.data)
    //     })
    // },
    // 删除评论
    deleteComment({ dispatch }, id) {
      request.get('/comment/deleteById?id=' + id).then(() => {
        dispatch('queryProduct', { page: 0, pageSize: 6 })
      })
    },
    // 通过审核
    passComment({ dispatch }, id) {
      request.get('/comment/commentExamine?commentid=' + id).then((res) => {
        dispatch('queryProduct', { page: 0, pageSize: 6 })
      })
    },
    // 拒绝审核
    refuseComent({ dispatch }, id) {
      request.get('/comment/commentRefuseExamine?commentid=' + id).then((res) => {
        dispatch('queryProduct', { page: 0, pageSize: 6 })
      })
    }
  }
}
