// tslint:disable:no-import-side-effect

import '@docs/main.scss';

import Vue from 'vue';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
config.autoAddCss = false;
library.add(fab, far, fas);
Vue.component('FaIcon', FontAwesomeIcon);

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
