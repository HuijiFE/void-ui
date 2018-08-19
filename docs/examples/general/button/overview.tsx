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
export class DocExample extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="doc-example">
        <vd-flexbox gap>
          <vd-flexbox>
            <vd-button>Button按钮</vd-button>
          </vd-flexbox>
          <vd-flexbox>
            <vd-button disabled>Button按钮</vd-button>
          </vd-flexbox>
          <vd-flexbox>
            <vd-button>Button按钮</vd-button>
          </vd-flexbox>
          <vd-flexbox>
            <vd-button>Button按钮</vd-button>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
