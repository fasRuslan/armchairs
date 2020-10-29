import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'
import router from "./router/router";
import { BootstrapVue } from 'bootstrap-vue'
import store from './vuex/store'

Vue.use(VueMask);

Vue.use(BootstrapVue);

import VueAgile from "vue-agile";

Vue.use(VueAgile);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
