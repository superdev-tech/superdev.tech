import Vue from 'vue';
import VueFbCustomerChat from 'vue-fb-customer-chat';

Vue.use(VueFbCustomerChat, {
  page_id: '100180625030536', //  change 'null' to your Facebook Page ID,
  theme_color: '#0084ff', // theme color in HEX
  locale: 'th_TH', // default 'en_US'
});

export default {};
