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
 * Component: Swimlane
 */
@Component
export class VdSwimlane extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="vd-swimlane">{this.$slots.default}</div>;
  }
}

/**
 * Component: Container
 */
@Component
export class VdContainer extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="vd-container">{this.$slots.default}</div>;
  }
}
