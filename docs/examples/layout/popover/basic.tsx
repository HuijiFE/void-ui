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
      <div staticClass="e-popover-demo">
        <vd-flexbox gap>
          <vd-flexbox flex="none">
            <vd-popover>
              <vd-button slot="trigger">popover</vd-button>
              Content of popover
            </vd-popover>
          </vd-flexbox>
          <vd-flexbox flex="none">
            <vd-popover>
              <vd-button slot="trigger">popover</vd-button>
              Content of popover
            </vd-popover>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
