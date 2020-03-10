import {get,post_json,post} from '../../http/axios'
import {setToken,getToken,removeToken} from '../../utils/auth'
export default {
  namespaced:true,
  state: {
    token:getToken(),
    info:{}, //用户信息,
    earn:{}, //收益
    waiterInfo:{} //员工详细信息
  },
  getters: {
    IncomeTotal(state){
      if(JSON.stringify(state.earn) !== '{}'){
        let result = 0;
        for(let earn of state.earn.values()){
          result += earn.money * 1
        }
        return result;
      }
    }
  },
  mutations: {
    refreshWaiterById(state,waiterInfo){
      state.waiterInfo = waiterInfo
    },
    refreshInfo(state,info){
      state.info = info;
    },
    refreshToken(state,token){
      state.token = token;
    },
    refreshEarnWaiter(state,earn){
      state.earn = earn;
    }
  },
  actions: {
    // 修改员工信息
    async UpdateWaiter({dispatch},params){
      let reponse = await post('/waiter/saveOrUpdate',params)
      // dispatch('WaiterById',     这里加id  )
    },
    // 根据员工id查询
    async WaiterById({commit},id){
      let response = await get('/waiter/findWaiterById?id='+id)
      commit('refreshWaiterById',response.data)
    },
    // 收益
    async EarningWaiter({commit},id){
      let response = await get('/waiter/detailsShou?id='+id)
      commit('refreshEarnWaiter',response.data)
    },
    // 登录
    async login(context,payload){
      // 1.登录
      let response = await post_json("/user/login",payload);
      let token = response.data.token;
      // 2.将token缓存起来？localStorage
      setToken(token);
      // 3. 将token维护到状态机中
      context.commit("refreshToken",token);
    },
    // 通过token获取info
    async info(context,token){
      // console.log('info');
      let response = await get("/user/info",{token});
      // 将用户信息设置到info中
      await context.commit("refreshInfo",response.data)
      // console.log('info-end');
    },
    // 退出
    async logout(context){
      // 1. 请求后台退出
      await post('/user/logout');
      // 2. 清理本地缓存
      removeToken();
      // 3. 清理store
      context.commit('refreshToken','');
      context.commit('refreshInfo',{});
    }
  }
}