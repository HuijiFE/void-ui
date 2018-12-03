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
 * Component: Example
 */
@Component
export default class Example extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-tabs-demo">
        <vd-tabs bordered>
          <vd-tab-pane label="tab 1" label-extra-class="e-tabs-demo_repulsive-right">
            <c-demo-box label="tab 1" />
          </vd-tab-pane>
          <vd-tab-pane label="tab 2">
            <c-demo-box label="tab 2" />
          </vd-tab-pane>
          <vd-tab-pane label="tab 3">
            <c-demo-box label="tab 3" />
          </vd-tab-pane>
        </vd-tabs>
      </div>
    );
  }
}
