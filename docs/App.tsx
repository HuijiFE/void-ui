import Vue, { CreateElement, VNode } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
config.autoAddCss = false;
library.add(fab, far, fas);
Vue.component('FaIcon', FontAwesomeIcon);

import VoidUI, { VdTheme } from 'void-ui';
Vue.use(VoidUI);

import * as components from '@docs/components/all';
Object.entries(components).forEach(([name, comp]) => {
  Vue.component(name, comp);
});

/**
 * App
 */
@Component
class App extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div id="app" staticClass="v-app" class={`vda-theme_${this.$vd_theme.theme}`}>
        <c-nav-bar />
        <router-view staticClass="v-app_wrapper" />
      </div>
    );
  }
}

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
import { createRouter } from '@docs/router';

export const createApp: () => { app: Vue; router: VueRouter } = () => {
  const router: VueRouter = createRouter();

  const app: Vue = new Vue({
    router,
    render: h => h(App),
  });

  return { app, router };
};

// tslint:disable:no-import-side-effect
import '@docs/App.scss';
