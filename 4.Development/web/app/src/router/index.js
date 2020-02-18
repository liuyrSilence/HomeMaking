import Vue from 'vue'
import VueRouter from 'vue-router'
// 管理页面
import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'
import Order from '../views/manager/Order'
import Product from '../views/manager/product/List'
import Help from '../views/manager/Help'
import User from '../views/manager/User'
import Address from '../views/manager/address/List'
import AddressEdit from '../views/manager/address/Edit'
import AddressAdd from '../views/manager/address/Add'
import OrderConform from '../views/manager/order/Conform'
import ConfirmAddress from '../views/manager/order/Confirm_address'
// 登录页面
import Login from '../views/Login'
import { getToken } from '../utils/auth'
import { Toast } from 'vant'
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/manager/home"
  },
  {
    path: '/manager',
    name: 'manager',
    component: Manager,
    beforeEnter: (to, from, next) => {  //属于路由自己的拦截器
      let token = getToken();
      if(token){
        // 查询info
        store.dispatch('user/info',token)
        .then(()=>{
          // 当获取万用户信息之后才允许跳转
          next();
        })
      } else {
        Toast("token失效")
        // 跳转到登录
        next({path:'/login'})
      }
    },
    children:[{
      path: 'home',
      component: Home,
    },{
      path: 'order',
      component: Order,
    },{
      path: 'product_list',
      component: Product,
    },{
      path: 'help',
      component: Help,
    },{
      path: 'user',
      component: User,
    },{
      path: 'address',
      component: Address
    },{
      path: 'address_edit',
      component: AddressEdit
    },{
      path: 'address_add',
      component: AddressAdd
    },{
      path: 'order_conform',
      component: OrderConform
    },{
      path: 'confirm_address',
      component: ConfirmAddress
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
