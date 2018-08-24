// tslint:disable:no-import-side-effect

import '@docs/main.scss';

import Vue from 'vue';

import VoidUI, { VdTheme } from '@void/ui/lib/void-ui';
Vue.use(VoidUI);

import * as components from '@docs/components/all';
Object.entries(components).forEach(([name, comp]) => {
  Vue.component(name, comp);
});

import App from '@docs/App';
import router from '@docs/router';

Vue.config.productionTip = false;

/**
 * App
 */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
