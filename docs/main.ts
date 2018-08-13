// tslint:disable:no-import-side-effect

import '@void/void-ui.scss';

import Vue from 'vue';

import VoidUI, { VdTheme } from '@void/void-ui';
Vue.use(VoidUI);
const vdTheme: VdTheme = new VdTheme();

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
