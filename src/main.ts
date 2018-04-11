import Vue from 'vue';
import App from '@docs/App.vue';
import VoidUI from '@void/VoidUI';

import VoidBrand from '@docs/components/VoidBrand.vue';

import router from '@docs/router';

Vue.use(VoidUI);
Vue.component(VoidBrand.name, VoidBrand);

Vue.config.productionTip = false;

/**
 * App
 */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
