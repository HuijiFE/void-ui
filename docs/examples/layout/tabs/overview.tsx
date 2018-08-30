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
      <div staticClass="e-tabs-overview">
        <vd-tabs>
          <vd-tab-pane label="tab 1">
            tab 1{/* <c-demo-box>tab 1</c-demo-box> */}
          </vd-tab-pane>
          <vd-tab-pane label="tab 2">
            tab 2{/* <c-demo-box>tab 2</c-demo-box> */}
          </vd-tab-pane>
          <vd-tab-pane label="tab 3">
            tab 3{/* <c-demo-box>tab 3</c-demo-box> */}
          </vd-tab-pane>
        </vd-tabs>
      </div>
    );
  }
}
