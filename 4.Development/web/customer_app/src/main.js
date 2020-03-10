import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'
import './common.css'


// 全局注册自定义组件
import Confirm_Address from './components/Confirm_Address'
import FullPageLayout from './components/FullPageLayout'
import OrderItem from './components/OrderItem'
import ProductItem from './components/ProductItem'
import AddressItem from './components/AddressItem'

import visibility from 'vue-visibility-change'
Vue.use(visibility)
Vue.component('briup-conform-address',Confirm_Address)
Vue.component('briup-fullpagelayout',FullPageLayout)
Vue.component('briup-order-item',OrderItem)
Vue.component('briup-address-item',AddressItem)
Vue.component('briup-product-item',ProductItem)

// 全局注册过滤器
Vue.filter('datefmt',function(val){
  if(val){
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
  }
  return val;
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
