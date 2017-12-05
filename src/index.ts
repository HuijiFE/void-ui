import { PluginFunction } from 'vue/types/plugin';
import { Vue as _Vue } from 'vue/types/vue';

import VdFlexbox from 'src/controls/flexbox/VdFlexbox.vue';
import VdButton from 'src/controls/button/VdButton.vue';
import VdButtonGroup from 'src/controls/button/VdButtonGroup.vue';
import VdScore from 'src/controls/score/VdScore.vue';
import VdToggle from 'src/controls/toggle/VdToggle.vue';
import DemoBoard from 'src/controls/demo/DemoBoard.vue';
import VdRadio from 'src/controls/radio/VdRadio.vue';

const allControls = {
  VdFlexbox,
  VdButton,
  VdButtonGroup,
  VdScore,
  VdToggle,
  DemoBoard,
  VdRadio,
};

const install: PluginFunction<any> = function(Vue, options = {}) {
  Object.entries(allControls).map(([name, control]) => {
    console.warn(`${name}: ${control}`);
    Vue.component(name, control);
  });
};

if (typeof window !== undefined && (window as any).Vue) {
  (window as any).Vue.use({ install });
}

export default install;
