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
export default class ViewHome extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="view-home">{this.$slots.default}</div>;
  }
}
