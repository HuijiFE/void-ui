import Vue, { PluginFunction } from 'vue';

export * from './components/base';
export * from './components/all';
export * from './plugins/all';
export * from './utils';

import * as base from './components/base';
import * as components from './components/all';
import * as plugins from './plugins/all';

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
  [
    plugins.bodyRenderer,
    components.VdTheme,
    components.VdMedia,
    components.VdGallery,
  ].forEach(plugin => $Vue.use(plugin, options));

  // install all components
  Object.entries(components).forEach(([name, comp]) => $Vue.component(name, comp));
};

/**
 * Void-UI
 */
export default {
  install,
  base,
  components,
  plugins,
};
