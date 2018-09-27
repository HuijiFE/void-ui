// tslint:disable:no-import-side-effect
import '@src/main.scss';

import Vue from 'vue';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// config.autoAddCss = false;
library.add(fab, far, fas);
Vue.component('FaIcon', FontAwesomeIcon);

import VoidUI, { VdTheme } from 'void-ui';
Vue.use(VoidUI);

import * as components from '@src/components/all';
Object.entries(components).forEach(([name, comp]) => {
  Vue.component(name, comp);
});

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
import { createRouter } from '@src/router';
import { VApp } from '@src/views/app';

/**
 * App factory
 */
export const createApp: () => { app: Vue; router: VueRouter } = () => {
  const router: VueRouter = createRouter();

  const app: Vue = new Vue({
    router,
    render: h => h(VApp),
  });

  return { app, router };
};
