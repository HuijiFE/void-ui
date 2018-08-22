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
import { BREAK_POINT_KEYS, MediaAlias, MediaScreen } from '@void/ui/lib/void-ui';

import { Example as ButtonOverview } from '@docs/examples/general/button/overview';

/**
 * View: Test
 */
@Component({
  components: {
    ButtonOverview,
  },
})
export default class ViewTest extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="view-test" style={{ padding: '32px' }}>
        <button-overview />
      </div>
    );
  }
}
