import Vue from 'vue';

export * from '@void/components/all';
import * as components from '@void/components/all';

let $$Vue: typeof Vue | undefined;

/**
 * Void-UI
 */
export default {
  // tslint:disable-next-line:variable-name
  install($Vue: typeof Vue): void {
    if ($$Vue && $$Vue === $Vue) {
      return;
    }

    $$Vue = $Vue;

    components.VdTheme.install($Vue);

    Object.entries(components).forEach(([name, comp]) => $Vue.component(name, comp));
  },
};
