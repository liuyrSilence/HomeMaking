import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import register from './modules/register'
import product from './modules/product'
import order from './modules/order'
import realname from './modules/realname'
import income from './modules/income'

export default new Vuex.Store({
  modules:{
    user,
    register,
    product,
    order,
    realname,
    income
  }
})
