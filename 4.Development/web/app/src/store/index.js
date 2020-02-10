import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import category from './modules/category'
import product from './modules/product'
import address from './modules/address'


export default new Vuex.Store({
  modules:{
    user,
    category,
    product,
    address
  }
})
