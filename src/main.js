import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(VueMask);

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
