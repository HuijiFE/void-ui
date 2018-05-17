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
 * Control Card
 */
@Component
export class VdCard extends VdControl {
  @Prop({ type: [Number, String], default: 1 })
  public readonly raise!: number | string;

  public get classes(): ClassName {
    return ['vd-card', `vdp-theme_${this.$theme}`, `vda-raise_${this.raise}`];
  }

  private render(h: CreateElement): VNode {
    return h('div', { class: this.classes }, [this.$slots.default]);
  }
}

/**
 * Sub control: CardHeader
 */
@Component
export class VdCardHeader extends VdControl {
  private render(h: CreateElement): VNode {
    return h('div', { class: 'vd-card_header' }, [this.$slots.default]);
  }
}

/**
 * Sub control: CardInner
 */
@Component
export class VdCardInner extends VdControl {
  private render(h: CreateElement): VNode {
    return h('div', { class: 'vd-card_inner' }, [this.$slots.default]);
  }
}

/**
 * Sub control: CardSeparator
 */
@Component
export class VdCardSeparator extends VdControl {
  private render(h: CreateElement): VNode {
    return h('div', { class: 'vd-card_separator' });
  }
}
