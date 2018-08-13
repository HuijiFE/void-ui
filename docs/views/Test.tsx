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
        <vd-theme theme="lite">
          <vd-button>test</vd-button>
        </vd-theme>
        <vd-theme theme="dark">
          <vd-button>test</vd-button>
        </vd-theme>
        <vd-theme theme="lite">
          <vd-button>test</vd-button>
        </vd-theme>
        <vd-theme theme="dark">
          <vd-button>test</vd-button>
        </vd-theme>
      </div>
    );
  }
}
