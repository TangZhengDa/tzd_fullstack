import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from '../axios/index'

// import login from '../axios/interface/login'
// Vue.prototype.$http = login

Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(api)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
