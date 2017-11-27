import VdButton from 'src/controls/button/VdButton.vue';
import { PluginFunction } from 'vue/types/plugin';
import { Vue as _Vue } from 'vue/types/vue';

const controls = [VdButton];

const install: PluginFunction<any> = function(Vue, options = {}) {
  controls.forEach(ctrl => Vue.component(ctrl.name, ctrl));
};

if (typeof window !== undefined && (window as any).Vue) {
  (window as any).Vue.use({ install });
}

export default install;
