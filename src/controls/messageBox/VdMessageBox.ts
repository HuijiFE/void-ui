import VdMessageBoxConstructor from './VdMessageBox.vue';
import Vue, { VNode } from 'vue';

const msgBox: (options: Object) => Promise<{}> = options => {
  const VdMessageBoxComponent = Vue.extend(VdMessageBoxConstructor);

  const VdMessageBoxVm = new VdMessageBoxComponent({
    el: document.createElement('div'),
    data: options,
  });

  const $el = VdMessageBoxVm.$el;
  document.body.appendChild($el);

  return new Promise((resolve, reject) => {
    VdMessageBoxVm.$on('confirm', () => {
      $el.remove();
      resolve('confirm');
    });

    VdMessageBoxVm.$on('cancel', () => {
      $el.remove();
      reject(new Error('cancel'));
    });
  });
};

export default msgBox;
