import { PluginFunction, PluginObject } from 'vue/types/plugin';
import { Vue as _Vue } from 'vue/types/vue';

import * as controls from 'src/controls';
export * from 'src/controls';

const install: PluginFunction<any> = function(Vue, options = {}) {
  Object.entries(controls).map(([name, control]) => {
    console.warn(`${name}: ${control}`);
    Vue.component(name, control);
  });
};

if (typeof window !== undefined && (window as any).Vue) {
  (window as any).Vue.use({ install });
}

const VoidUI: PluginObject<any> = {
  install,
};

export default VoidUI;
