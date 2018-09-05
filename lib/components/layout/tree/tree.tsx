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
 * Component: Tree
 */
@Component
export class VdTree extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="vd-tree">{this.$slots.default}</div>;
  }
}
