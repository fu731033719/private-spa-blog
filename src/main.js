import Vue from 'vue'
import App from './App.vue'
import './common/font/font.css'
import '../src/common/reset.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
