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
 * Component: Guide
 */
@Component
export class VGuide extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="v-guide">{this.$slots.default}</div>;
  }
}
