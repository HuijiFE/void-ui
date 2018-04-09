import { Vue, Component, Emit, Inject, Model, Prop, Provide, Watch } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { VdControl } from '@void/controls/base/VdControl';

/**
 * Control Clamp
 */
@Component
export class VdClamp extends VdControl {
  private render(h: CreateElement): VNode {
    return h(
      'div',
      {
        class: ['vd-clamp'],
      },
      [this.$slots.default],
    );
  }
}
