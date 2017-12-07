import { PluginFunction, PluginObject } from 'vue/types/plugin';
import { Vue as _Vue } from 'vue/types/vue';

export * from 'src/controls';
import * as controls from 'src/controls';
import msg from 'src/controls/messageBox/VdMessageBox.js';

const install: PluginFunction<any> = function(Vue, options = {}) {
  Object.entries(controls).map(([name, control]) => {
    Vue.component(name, control);
  });

  Vue.prototype.$msg = msg;
};

if (typeof window !== undefined && (window as any).Vue) {
  (window as any).Vue.use({ install });
}

const VoidUI: PluginObject<any> = {
  install,
};

export default VoidUI;
