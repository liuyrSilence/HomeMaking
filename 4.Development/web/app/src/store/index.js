import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import category from './modules/category'
import product from './modules/product'
import address from './modules/address'
import order from './modules/order'
import shopcar from './modules/shopcar'
import comment from './modules/comment'
import recharge from './modules/recharge'
import register from './modules/register'
import realname from './modules/realname'


export default new Vuex.Store({
  modules:{
    user,
    category,
    product,
    address,
    order,
    shopcar,
    comment,
    recharge,
    register,
    realname
  }
})
