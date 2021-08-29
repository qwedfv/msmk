import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'

import axios from 'axios'
Vue.prototype.$axios=axios

import '@/plugins/vant'
Vue.config.productionTip = false

import { baseUrl } from '@/config'
console.log(baseUrl)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
