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
      <div class="e-button-basic">
        <vd-flexbox gap>
          <vd-flexbox flex="none">
            <vd-button>button</vd-button>
          </vd-flexbox>
          <vd-flexbox flex="none">
            <vd-button skin="plain">button</vd-button>
          </vd-flexbox>
          <vd-flexbox flex="none">
            <vd-button skin="flat">button</vd-button>
          </vd-flexbox>
          <vd-flexbox flex="none">
            <vd-button skin="silk">button</vd-button>
          </vd-flexbox>
        </vd-flexbox>
      </div>
    );
  }
}
