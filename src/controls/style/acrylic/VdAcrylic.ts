import {
  Vue,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { VdControl } from '@void/controls/base/VdControl';

/**
 * Control Acrylic
 */
@Component
export class VdAcrylic extends VdControl {
  @Prop({ type: String, required: true })
  public src!: string;

  public get classes(): ClassName {
    return ['vd-acrylic', `vdp-theme_${this.$theme}`];
  }

  private render(h: CreateElement): VNode {
    return h('div', { class: this.classes }, [
      h('div', { class: 'vd-acrylic_inner' }, [
        h('img', {
          class: 'vd-acrylic_img',
          domProps: {
            src: this.src,
          },
        }),
        h('div', { class: 'vd-acrylic_cover' }),
      ]),
    ]);
  }
}
