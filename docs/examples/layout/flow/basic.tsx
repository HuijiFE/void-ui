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
      <div staticClass="e-flow-demo">
        <header staticClass="e-flow-demo_navbar">
          <vd-container staticClass="e-flow-demo_navbar-container">
            <c-demo-box bordered rainbow ratio="60px" label="Navbar" />
          </vd-container>
        </header>
        <vd-swimlane staticClass="e-flow-demo_section">
          <vd-container>
            <c-demo-box bold bordered rainbow label="Section 1" />
          </vd-container>
        </vd-swimlane>
        <vd-swimlane staticClass="e-flow-demo_section">
          <vd-container>
            <c-demo-box bold bordered rainbow label="Section 2" />
          </vd-container>
        </vd-swimlane>
        <vd-swimlane staticClass="e-flow-demo_section">
          <vd-container>
            <c-demo-box bold bordered rainbow label="Section 3" />
          </vd-container>
        </vd-swimlane>
        <vd-swimlane staticClass="e-flow-demo_section">
          <vd-container>
            <c-demo-box bold bordered rainbow label="Section 4" />
          </vd-container>
        </vd-swimlane>
      </div>
    );
  }
}
