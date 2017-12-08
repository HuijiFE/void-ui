import VdMessageBoxConstructor from './VdMessageBox.vue';
import Vue, { VNode } from 'vue';

const msgBox = options => {
  // const VdMessageBoxComponent = Vue.extend(VdMessageBoxConstructor);

  // const VdMessageBoxVm = new VdMessageBoxComponent({
  //   el: document.createElement('div'),
  //   data: options,
  // });

  // document.body.appendChild(VdMessageBoxVm.$el);

  // // 监听关闭事件
  // VdMessageBoxVm.$on('close', () => {
  //   document.body.removeChild(VdMessageBoxVm.$el);
  // });

  return new Promise((resolve, reject) => {
    const VdMessageBoxVm = new Vue({
      // el: document.createElement('div'),
      render: h => {
        return h(VdMessageBoxConstructor, {
          on: {
            confirm($el, fn) {
              $el.remove();
              resolve(fn);
            },
            cancel($el, fn) {
              $el.remove();
              reject(fn);
            },
          },
        });
      },
    }).$mount(document.createElement('div'));

    document.body.appendChild(VdMessageBoxVm.$el);
  });
};

export default msgBox;
