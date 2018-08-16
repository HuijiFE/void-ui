import Vue, { PluginFunction } from 'vue';

export * from '@void/ui/lib/components/all';
import * as components from '@void/ui/lib/components/all';

let $$Vue: typeof Vue | undefined;

// tslint:disable-next-line:variable-name
const install: PluginFunction<undefined> = $Vue => {
  if ($$Vue && $$Vue === $Vue) {
    return;
  }

  $$Vue = $Vue;

  // install all components
  Object.entries(components).forEach(([name, comp]) => $Vue.component(name, comp));

  // install all plugins
  components.VdTheme.install($Vue);
};

/**
 * Void-UI
 */
export default {
  install,
};
