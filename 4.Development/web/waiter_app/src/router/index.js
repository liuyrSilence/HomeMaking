import Vue from 'vue'
import VueRouter from 'vue-router'
// 管理页面
import Manager from '../views/manager/Index'
import Home from '../views/manager/Home'
import Order from '../views/manager/Order'
import User from '../views/manager/User'
import Realname from '../views/manager/Realname'
import Myorder from '../views/manager/Myorder'
import Address from '../views/manager/address/List'
import AddressEdit from '../views/manager/address/Edit'
import IncomeList from '../views/manager/income/List'
import IncomeDetails from '../views/manager/income/Details'
import Withdraw from '../views/manager/income/Withdraw'
import OrderConform from '../views/manager/order/Conform'
// 登录页面
import Login from '../views/Login'
// 注册页面
import Register from '../views/Register'
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
      path: 'user',
      component: User,
    },{
      path: 'realname',
      component: Realname,
    },{
      path: 'myorder',
      component: Myorder,
    },{
      path: 'address',
      component: Address
    },{
      path: 'address_edit',
      component: AddressEdit
    },{
      path: 'income_list',
      component: IncomeList
    },{
      path: 'income_details',
      component: IncomeDetails
    },{
      path: 'withdraw',
      component: Withdraw
    },{
      path: 'order_conform',
      component: OrderConform
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
    component: Register
  },
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
