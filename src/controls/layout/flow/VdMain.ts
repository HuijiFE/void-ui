import { Vue, Component, Emit, Inject, Model, Prop, Provide, Watch } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { VdControl } from '@void/controls/base/VdControl';

/**
 * Control Main
 */
@Component
export class VdMain extends VdControl {
  private render(h: CreateElement): VNode {
    return h(
      'main',
      {
        class: ['vd-main', `vdp-theme-${this.$theme}`],
      },
      [this.$slots.default],
    );
  }
}
