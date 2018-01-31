import { PluginFunction, PluginObject } from 'vue/types/plugin';
import { Vue as _Vue } from 'vue/types/vue';

export * from './controls';
import * as controls from './controls';
import * as filters from './filters';
import * as directives from './directives';

const install: PluginFunction<any> = function(Vue, options = {}) {
  Object.entries(controls).forEach(([name, control]) => {
    Vue.component(name, control);
  });

  Object.entries(filters).forEach(([name, filter]) => {
    Vue.filter(name, filter);
  });

  Object.entries(directives).forEach(([name, directive]) => {
    Vue.directive(name, directive);
  });
};

if (typeof window !== undefined && (window as any).Vue) {
  (window as any).Vue.use({ install });
}

const VoidUI: PluginObject<any> = {
  install,
};

export default VoidUI;
