import Vue, { PluginFunction } from 'vue';

export * from '@void/ui/lib/components/base/index';
export * from '@void/ui/lib/components/all';

import * as base from '@void/ui/lib/components/base/index';
import * as components from '@void/ui/lib/components/all';

let $$Vue: typeof Vue | undefined;

export interface VoidUIOptions {
  defaultTheme?: base.Theme;
  breakpoints?: base.BreakPoints;
}

// tslint:disable-next-line:variable-name
const install: PluginFunction<VoidUIOptions> = ($Vue, options) => {
  if ($$Vue && $$Vue === $Vue) {
    return;
  }

  $$Vue = $Vue;

  // install all plugins
  base.PluginMatchMedia.install($Vue, options && options.breakpoints);

  // install all components
  Object.entries(components).forEach(([name, comp]) => $Vue.component(name, comp));

  // install all component additional plugins
  components.VdTheme.install($Vue);
};

/**
 * Void-UI
 */
export default {
  install,
};
