import Vue from 'vue';

import VoidUI, { VoidTheme } from '@void/void-ui';
Vue.use(VoidUI);
const vdTheme: VoidTheme = new VoidTheme({ theme: 'lite' });

import router from '@docs/router';
import App from '@docs/App';

Vue.config.productionTip = false;

/**
 * App
 */
new Vue({
  router,
  vdTheme,
  render: h => h(App),
}).$mount('#app');
