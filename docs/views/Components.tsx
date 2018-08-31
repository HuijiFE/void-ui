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
 * Component: Components
 */
@Component
export class VComponents extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="v-components">{this.$slots.default}</div>;
  }
}
