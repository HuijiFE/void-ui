import Vue, { PluginFunction } from 'vue';

export * from './components/base/index';
export * from './components/all';

import * as base from './components/base/index';
import * as components from './components/all';

let $$Vue: typeof Vue | undefined;

export interface VoidUIOptions
  extends components.VdMediaOptions,
    components.VdThemeOptions {}

// tslint:disable-next-line:variable-name
const install: PluginFunction<VoidUIOptions> = ($Vue, options?) => {
  if ($$Vue && $$Vue === $Vue) {
    return;
  }

  $$Vue = $Vue;

  // install all plugins

  // install all component additional plugins
  components.VdTheme.install($Vue, options);
  components.VdMedia.install($Vue, options);

  // install all components
  Object.entries(components).forEach(([name, comp]) => $Vue.component(name, comp));
};

/**
 * Void-UI
 */
export default {
  version: process.env.VUE_APP_VOID_UI_VERSION,
  install,
  base,
  components,
};
