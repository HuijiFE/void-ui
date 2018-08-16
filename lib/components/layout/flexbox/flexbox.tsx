import Vue, { CreateElement, VNode } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { Size } from '@void/ui/lib/components/base';
import { PropsDefinition, DefaultProps, ComponentOptions } from 'vue/types/options';

export interface BreakPointMap extends Record<Size, number> {}

function generateProps(
  propsDef: PropsDefinition<DefaultProps>,
): PropsDefinition<DefaultProps> {
  return propsDef;
}

const props: PropsDefinition<DefaultProps> = generateProps({
  tag: {
    type: String,
    default: 'div',
  },
});

/**
 * Component Flexbox
 */
@Component({
  props,
})
export class VdFlexbox extends Vue {
  // region ======== props ========

  public readonly tag!: HTMLElementTagNameMap;

  public readonly flex!: number | string;

  public readonly hidden!: boolean;

  public readonly gap!: boolean;

  public readonly direction!: string;

  public readonly wrap!: string;

  public readonly justify!: string;

  public readonly align!: string;

  // endregion

  private render(h: CreateElement): VNode {
    return <div staticClass="vd-flexbox">{this.$slots.default}</div>;
  }
}
