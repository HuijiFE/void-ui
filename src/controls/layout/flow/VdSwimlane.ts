import { Vue, Component, Emit, Inject, Model, Prop, Provide, Watch } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';

/**
 * Control Swimlane
 */
@Component
export class VdSwimlane extends Vue {
  private render(h: CreateElement): VNode {
    return h('div', {class: 'vd-swimlane'}, [this.$slots.default]);
  }
}
