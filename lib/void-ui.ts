import { default as _Vue } from 'vue';

export * from '@void/plugins/VoidTheme';
import { VoidTheme } from '@void/plugins/VoidTheme';

import * as components from '@void/components/all';

/**
 * Void-UI
 */
export default {
  // tslint:disable-next-line:variable-name
  install(Vue: typeof _Vue): void {
    Vue.use(VoidTheme);

    Object.entries(components).forEach(([name, comp]) => Vue.component(name, comp));
  },
};
