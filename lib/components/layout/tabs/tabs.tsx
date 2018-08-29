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
 * Component: Tabs
 */
@Component
export class VdTabs extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="vd-tabs">{this.$slots.default}</div>;
  }
}

/**
 * Component: TabPane
 */
@Component
export class VdTabPane extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="vd-tab-pane">{this.$slots.default}</div>;
  }
}
