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
 * View: Home
 */
@Component
export class VHome extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="v-home">{this.$slots.default}</div>;
  }
}
