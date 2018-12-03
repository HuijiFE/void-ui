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

/**
 * Component: HyperLink
 */
@Component
export class VdHyperLink extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="vd-hyper-link">{this.$slots.default}</div>;
  }
}
