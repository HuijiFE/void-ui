import {
  Vue,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';

/**
 * View: Test
 */
@Component
export default class ViewTest extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="view-test">
        <vd-button>test</vd-button>
      </div>
    );
  }
}
