import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/vuetify/vuetify'

import VueLazyload from 'vue-lazyload'

import { prefixForProxy } from "@/addtools/globalVar"


Vue.prototype.$prefixForProxy = prefixForProxy

Vue.prototype.$axios =  require("axios");

//import '@/assets/scss/main.scss'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: '/rout/img/load.gif',
  attempt: 1
})

store.dispatch('libPictures/getPictures')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
