import Vue from 'vue'
import VueRouter from 'vue-router'
// 管理页面
import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'
import Order from '../views/manager/Order'
import Product from '../views/manager/product/List'
import Help from '../views/manager/Help'
import Comment from '../views/manager/Comment'
import User from '../views/manager/User'
import Realname from '../views/manager/Realname'
import Address from '../views/manager/address/List'
import AddressEdit from '../views/manager/address/Edit'
import AddressAdd from '../views/manager/address/Add'
import OrderConform from '../views/manager/order/Conform'
import ConfirmAddress from '../views/manager/order/Confirm_address'
import Details from '../views/manager/order/Details'
import Register from '../views/Register'
import Money from '../views/manager/money/Money'
import Recharge from '../views/manager/money/Recharge'
import Withdraw from '../views/manager/money/Withdraw'

// 登录页面
import Login from '../views/Login'
import { getToken } from '../utils/auth'
import { Toast } from 'vant'
import store from '../store'


Vue.use(VueRouter)
Vue.use(Toast);


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
      path: 'money',
      component: Money
    },{
      path: 'recharge',
      component: Recharge
    },{
      path: 'withdraw',
      component: Withdraw
    },{
      path: 'product_list',
      component: Product,
    },{
      path: 'help',
      component: Help,
    },{
      path: 'comment',
      component: Comment,
    },{
      path: 'user',
      component: User,
    },{
      path: 'realname',
      component: Realname,
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
      path: 'order',
      component: Order,
    },{
      path: 'order_conform',
      component: OrderConform
    },{
      path: 'confirm_address',
      component: ConfirmAddress
    },{
      path: 'order_details',
      component: Details,
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
