// tslint:disable:no-import-side-effect

import '@void/ui/lib/void-ui.scss';

import Vue from 'vue';

import VoidUI, { VdTheme } from '@void/ui/lib/void-ui';
Vue.use(VoidUI);
const vdTheme: VdTheme = new VdTheme({
  propsData: {
    theme: 'dark',
  },
});

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
