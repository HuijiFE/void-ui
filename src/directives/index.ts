import Vue, { VNode, VNodeDirective, DirectiveOptions } from 'vue';
import VdLoading from 'src/controls/loading/VdLoading.vue';

export const loading: DirectiveOptions = {
  bind(el, binding, vnode) {
    let vmLoading = new VdLoading({
      el: document.createElement('div'),
      data: {
        testData: 'haha',
      },
      template: '<Loading/>',
      components: { VdLoading },
    });
    // console.log(vnode);

    // ToggleLoadingStatus(el, vmLoading.$el, binding);
    // el.appendChild(loading.$el);
  },
  update(el, binding) {
    //
  },
  unbind(el, binding) {
    //
  },
};

function ToggleLoadingStatus(
  el: HTMLElement,
  loading: HTMLElement,
  binding: VNodeDirective,
) {
  if (binding.value === true) {
    // Vue.nextTick(() => {
    //   if (binding.modifiers.fullscreen) {

    //   }
    // })

    if (binding.modifiers.fullscreen) {
      let bodyPosition = document.body.style.position;
      document.body.style.position = 'relative';
      document.body.appendChild(loading);
      // if (bodyPosition !== '')
    } else {
      // if (el.style.position)
      console.log('ss');
    }
  }
}
