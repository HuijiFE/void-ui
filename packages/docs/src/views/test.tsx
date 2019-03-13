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
import { BREAK_POINT_KEYS, MediaAlias, MediaScreen } from 'void-ui';

/**
 * View: Test
 */
@Component
export class VTest extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-test">
        <c-designer />
      </div>
    );
  }
}
