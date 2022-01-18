import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import {routes} from './route/index'
Vue.use(VueRouter)

Vue.config.productionTip = false
const router =new VueRouter({
  routes,
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
