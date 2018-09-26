import Vue, { CreateElement, VNode, PluginObject } from 'vue';

let $$Vue: typeof Vue;

export type BodyDestroyer = () => void;

declare module 'vue/types/vue' {
  interface Vue {
    $vd_bodyRender(renderFn: (h: CreateElement) => VNode): BodyDestroyer;
  }
}

/**
 * Render in the document.body to avoid overflow hidden.
 * Return a Vue instance, do not forget to destroy it.
 */
function vd_bodyRender(this: Vue, renderFn: (h: CreateElement) => VNode): BodyDestroyer {
  if (this.$isServer) {
    return () => undefined;
  }

  const el: Element = document.createElement('div');
  document.body.appendChild(el);

  const vm: Vue = new Vue({ parent: this, render: renderFn });
  vm.$mount(el);

  let isDestroyed: boolean = false;

  return () => {
    if (isDestroyed) {
      return;
    }
    document.body.removeChild(vm.$el);
    vm.$destroy();
    isDestroyed = true;
  };
}

export const bodyRenderer: PluginObject<undefined> = {
  install: $Vue => {
    if ($$Vue && $$Vue === $Vue) {
      return;
    }

    $$Vue = $Vue;

    $Vue.prototype.$vd_bodyRender = vd_bodyRender;
  },
};
