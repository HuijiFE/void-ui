// tslint:disable:no-import-side-effect
import '@docs/main.scss';

import Vue, { FunctionalComponentOptions } from 'vue';
import { RecordPropsDefinition } from 'vue/types/options';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
config.autoAddCss = false;
library.add(fab, far, fas);
// tslint:disable:no-any
Vue.component<Record<string, any>>(
  'FaIcon',
  FontAwesomeIcon as FunctionalComponentOptions<
    Record<string, any>,
    RecordPropsDefinition<Record<string, any>>
  >,
);
// tslint:enable:no-any

import VoidUI, { VdTheme } from 'void-ui';
Vue.use(VoidUI);

import * as components from '@docs/components/all';
Object.entries(components).forEach(([name, comp]) => {
  Vue.component(name, comp);
});

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
import { createRouter } from '@docs/router';
import { VApp } from '@docs/views/app';

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
