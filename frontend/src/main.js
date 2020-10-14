import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'fontawesome-4.7/css/font-awesome.min.css'
import { BProgress } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
Vue.component('b-progress', BProgress)

import VueDragDrop from 'vue-drag-drop';
 
Vue.use(VueDragDrop);

import { prefixForProxy } from "@/addtools/globalVar"


Vue.prototype.$prefixForProxy = prefixForProxy

Vue.prototype.$axios = require("axios");



store.dispatch('libPictures/getPictures')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
