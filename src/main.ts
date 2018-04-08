import Vue from 'vue';
import App from '@docs/App.vue';
import VoidUI from '@void/VoidUI';

import router from '@docs/router';

Vue.config.productionTip = false;

Vue.use(VoidUI);

/**
 * App
 */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
