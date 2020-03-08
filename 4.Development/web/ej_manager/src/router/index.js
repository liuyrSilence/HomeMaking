import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/custermer',
    component: Layout,
    redirect: '/custermer',
    children: [
      {
        path: 'custermer',
        component: () => import('@/pages/custermer/Custermer'),
        name: 'custermer',
        meta: { title: '顾客管理', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product',
    children: [
      {
        path: 'product',
        component: () => import('@/pages/product/Product'),
        name: 'product',
        meta: { title: '产品管理', icon: 'guide', affix: true }
      }
    ]
  },
  {
    path: '/categroy',
    component: Layout,
    redirect: '/categroy',
    children: [
      {
        path: 'categroy',
        component: () => import('@/pages/category/Category'),
        name: 'categroy',
        meta: { title: '栏目管理', icon: 'icon', affix: true }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order',
    children: [
      {
        path: 'order',
        component: () => import('@/pages/order/Order'),
        name: 'order',
        meta: { title: '订单管理', icon: 'example', affix: true }
      }
    ]
  },
  {
    path: '/waiter',
    component: Layout,
    redirect: '/waiter',
    children: [
      {
        path: 'waiter',
        component: () => import('@/pages/waiter/Waiter'),
        name: 'waiter',
        meta: { title: '员工管理', icon: 'tab', affix: true }
      }
    ]
  },
  {
    path: '/comment',
    component: Layout,
    redirect: '/comment',
    children: [
      {
        path: 'comment',
        component: () => import('@/pages/comment/Comment'),
        name: 'comment',
        meta: { title: '评论管理', icon: 'user', affix: true }
      }
    ]
  },
  {
    path: '/details',
    component: Layout,
    redirect: '/details',
    children: [
      {
        path: 'details',
        component: () => import('@/pages/custermer/Details'),
        name: 'details',
        hidden: true,
        meta: { title: '详情页面' }
      }
    ]
  },
  {
    path: '/productDetails',
    component: Layout,
    redirect: '/productDetails',
    children: [
      {
        path: 'productDetails',
        component: () => import('@/pages/product/details'),
        name: 'productDetails',
        hidden: true,
        meta: { title: '产品详情' }
      }
    ]
  },
  {
    path: '/waiterDetails',
    component: Layout,
    redirect: '/waiterDetails',
    children: [
      {
        path: 'waiterDetails',
        component: () => import('@/pages/waiter/Deteils'),
        name: 'waiterDetails',
        hidden: true,
        meta: { title: '员工详情' }
      }
    ]
  },
  {
    path: '/orderDetails',
    component: Layout,
    redirect: '/orderDetails',
    children: [
      {
        path: 'orderDetails',
        component: () => import('@/pages/order/Order_details'),
        name: 'orderDetails',
        hidden: true,
        meta: { title: '订单详情' }
      }
    ]
  },
  {
    path: '/examine',
    component: Layout,
    redirect: '/examine',
    meta: { title: '审核大厅', icon: 'user' },
    children: [
      {
        path: 'waiterExamine',
        component: () => import('@/pages/Examine/Waiter_E'),
        name: 'waiterExamine',
        meta: { title: '员工审核' }
      },
      {
        path: 'CashExamine',
        component: () => import('@/pages/Examine/Cash_E'),
        name: 'CashExamine',
        meta: { title: '提现审核' }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
