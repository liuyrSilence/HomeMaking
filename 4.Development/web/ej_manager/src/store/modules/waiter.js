import request from '@/utils/request'
import querystring from 'querystring'
export default {
  namespaced: true,
  state: {
    waiters: [],
    total: '',
    waiter_id: [],
    shouyi: [],
    total1: '',
    shouyiDetailses: [],
    waiter:[]
  },
  mutations: {
    SET_WAITER(state, waiters) {
      state.waiters = waiters
    },
    SET_WAITERALL(state, waiter) {
      state.waiter = waiter
    },
    SET_TOTAL(state, total) {
      state.total = total
    },
    SET_WAITERBYID(state, waiter_id) {
      state.waiter_id = waiter_id
    },
    SET_SHOUYI(state, shouyi) {
      state.shouyi = shouyi
    },
    SET_TOTAL1(state, total1) {
      state.total1 = total1
    },
    SET_SHOUYIDETAILS(state, shouyiDetailses) {
      state.shouyiDetailses = shouyiDetailses
    }
  },
  actions: {
    // 查询所有员工
    findAllwaiter({ commit }) {
      request.get('waiter/findAll').then((res) => {
        const list=res.data
        let itme=[]
        for(let i=0;i<list.length;i++){
          if(list[i].status==='启用'){
            itme.push(list[i])
            console.log(itme)
          }else{
            console.log(list[i])
          }
        }
        commit('SET_WAITERALL', itme)
      })
    },
    // 分页查询
    queryWaiter({ commit }, list) {
      request({
        method: 'POST',
        url: '/waiter/query',
        data: querystring.stringify(list)
      }).then((res) => {
        commit('SET_WAITER', res.data.list)
        commit('SET_TOTAL', res.data.total)
      })
    },
    // 保存员工信息
    saveWaiter({ dispatch }, custermerForm) {
      request({
        method: 'POST',
        url: '/waiter/saveOrUpdate',
        'content-type': 'application/x-www-form-urlencoded',
        data: querystring.stringify(custermerForm)
      }).then((res) => {
        dispatch('queryWaiter', { page: 0, pageSize: 6 })
      })
    },
    // 删除员工信息
    deleteWaiter({ dispatch }, id) {
      request.get('/waiter/deleteById?id=' + id).then((res) => {
        dispatch('queryWaiter', { page: 0, pageSize: 6 })
      })
    },
    // 通过员工id查询员工信息
    findwaiterById({ commit }, id) {
      request.get('/waiter/findWaiterById?id=' + id).then((res) => {
        commit('SET_WAITERBYID', res.data)
      })
    },
    // 拒绝员工审核
    refuseWaiter({ dispatch }, list) {
      request({
        method: 'POST',
        url: '/waiter/refusauditing',
        'content-type': 'application/x-www-form-urlencoded',
        data: querystring.stringify(list)
      }).then((res) => {
        dispatch('queryWaiter', { page: 0, pageSize: 6 })
      })
    },
    // 通过员工审核
    passWaiter({ dispatch }, list) {
      request.get('/waiter/auditing', {
        params: {
          id: list.id,
          img1: list.img1,
          img2: list.img2
        }
      }).then((res) => {
        dispatch('queryWaiter', { page: 0, pageSize: 6 })
      })
    },
    // 分页查询员工收益与提现
    shouWaiter({ commit }, list) {
      request({
        method: 'POST',
        url: '/waiter/queryShou',
        data: querystring.stringify(list)
      }).then((res) => {
        commit('SET_SHOUYI', res.data.list)
        commit('SET_TOTAL1', res.data.total)
      })
    },
    // 通过id查询员工收益
    shouyiDetails({ commit }, id) {
      request.get('/waiter/detailsShou?id=' + id).then((res) => {
        commit('SET_SHOUYIDETAILS', res.data)
      })
    },
    // 上传凭证
    uploadExamine({ dispatch }, list) {
      request({
        method: 'POST',
        url: '/waiter/uploadExamine',
        data: list
      }).then((res) => {
        dispatch('shouWaiter', { page: 0, pageSize: 6,type:'提现' })
      })
    },
    // 提现审核
    cashExamine({ dispatch }, list) {
      request({
        method: 'POST',
        url: '/waiter/waiterexamine',
        data: list
      }).then((res) => {
        dispatch('shouWaiter', { page: 0, pageSize: 6, type: '提现' })
      })
    }
  }
}
