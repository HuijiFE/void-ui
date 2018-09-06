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
export default class NsExample extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="e-flexbox-demo">
        <div class="e-flexbox-demo">
          <vd-flexbox>
            <vd-flexbox flex={20}>
              <c-demo-box label="flex = 20" />
            </vd-flexbox>
            <vd-flexbox flex={50}>
              <c-demo-box label="flex = 50" />
            </vd-flexbox>
            <vd-flexbox flex={30}>
              <c-demo-box label="flex = 30" />
            </vd-flexbox>
          </vd-flexbox>
        </div>
      </div>
    );
  }
}
