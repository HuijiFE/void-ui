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
 * Component: ComponentsIndex
 */
@Component
export class VComponentsIndex extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="v-components-index">{this.$slots.default}</div>;
  }
}
