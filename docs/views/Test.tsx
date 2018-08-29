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

/**
 * View: Test
 */
@Component
export default class ViewTest extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-test" style={{ padding: '32px' }}>
        <img
          staticClass="v-test_cover"
          src="https://xyoss.g.com.cn/i/tgm-gl-tilewalls-cover_100_100/games/cover/bfc6d68c73148f14bc63a34fe39fdf1f.png"
          alt="Ayasa绚沙"
        />
        <c-example path="general/button/overview" />
        <c-example path="general/button/tone" />
      </div>
    );
  }
}
