import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import vueFbCustomerChat from './plugins/vue-fb-customer-chat';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  vueFbCustomerChat,
  render: (h) => h(App),
}).$mount('#app');
