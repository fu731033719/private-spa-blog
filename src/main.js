import Vue from 'vue'
import App from './App.vue'
import './common/font/font.css'
import '../src/common/reset.css'
import '../src/common/global.css'
import router from './router'
import store from './store'
import Vtip from 'vtip'
import 'vtip/lib/index.min.css'

Vue.config.productionTip = false
Vue.use(Vtip.directive)

Vue.prototype.$tip = Vtip.tip

router.afterEach(() => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
