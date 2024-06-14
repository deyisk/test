import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';



Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')


