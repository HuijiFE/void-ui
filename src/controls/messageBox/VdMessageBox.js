import VdMessageBox from './VdMessageBox.vue';
import Vue, { VNode } from 'vue';

const msgBox = options => {
  const VdMessageBoxConstructor = Vue.extend(VdMessageBox);

  const VdMessageBoxComponent = new VdMessageBoxConstructor({
    el: document.createComment('div'),
    data: options,
  });

  document.body.appendChild(VdMessageBoxComponent.$el);
};

export default msgBox;
