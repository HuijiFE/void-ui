import Vue from 'vue';

import VoidUI from '@void/void-ui';
Vue.use(VoidUI);

import router from '@docs/router';
import App from '@docs/App';

Vue.config.productionTip = false;

/**
 * App
 */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
