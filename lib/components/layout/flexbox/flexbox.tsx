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
import { Size } from '@void/components/base';

export interface BreakPointMap extends Record<Size, number> {}

/**
 * Component Flexbox
 */
@Component
export class VdFlexbox extends Vue {
  @Prop({ type: String, default: 'div' })
  public readonly tag!: HTMLElementTagNameMap;

  @Prop({ type: [Number, String] })
  public readonly flex!: number | string;

  @Prop({ type: Boolean, default: false })
  public readonly hidden!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly gap!: boolean;

  @Prop({ type: String })
  public readonly direction!: string;

  @Prop({ type: String })
  public readonly wrap!: string;

  @Prop({ type: String })
  public readonly justify!: string;

  @Prop({ type: String })
  public readonly align!: string;

  private render(h: CreateElement): VNode {
    return <div staticClass="vd-flexbox">{this.$slots.default}</div>;
  }
}
