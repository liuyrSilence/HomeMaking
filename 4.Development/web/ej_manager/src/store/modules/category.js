import request from '@/utils/request'
import querystring from 'querystring'
export default {
  namespaced: true,
  state: {
    categorys: [],
    total: ''
  },
  mutations: {
    SET_CATEGORYS(state, categorys) {
      state.categorys = categorys
    },
    SET_TOTAL(state, total) {
      state.total = total
    }
  },
  actions: {
    // 查询所有栏目
    findAllcategory({ commit }) {
      request.get('category/findAll').then((res) => {
        commit('SET_CATEGORYS', res.data)
      })
    },
    // 分页查询
    queryCategory({ commit }, list) {
      request({
        method: 'POST',
        url: '/category/query',
        data: querystring.stringify(list)
      }).then((res) => {
        commit('SET_CATEGORYS', res.data.list)
        commit('SET_TOTAL', res.data.total)
      })
    },
    // 保存栏目信息
    saveCategory({ dispatch }, categoryForm) {
      request({
        method: 'POST',
        url: 'category/saveOrUpdate',
        'content-type': 'application/x-www-form-urlencoded',
        data: querystring.stringify(categoryForm)
      }).then((res) => {
        dispatch('queryCategory', { page: 0, pageSize: 6 })
      })
    },
    // 删除栏目信息
    deleteCategory({ dispatch }, id) {
      request.get('category/deleteById?id=' + id).then((res) => {
        dispatch('queryCategory', { page: 0, pageSize: 6 })
      })
    },
    // 根据栏目名称查询
    searchCategoryById({ commit }, categoryForm) {
      request({
        method: 'POST',
        url: '/category/query',
        'content-type': 'application/x-www-form-urlencoded',
        data: querystring.stringify(categoryForm)
      }).then((res) => {
        commit('SET_CATEGORYS', res.data.list)
      })
    }
  }
}
