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
import zhCN from '@docs/articles/zh-CN/menu';
import { SideBarGroup } from '@docs/components/all';

const menuMap: Record<string, Record<string, string>> = {
  'zh-CN': zhCN,
};

/**
 * View: Components
 */
@Component
export class VComponents extends Vue {
  public path: string = 'test';

  private menu: SideBarGroup[] = [];

  @Watch('$route')
  private watchRoute(): void {
    //
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-components">
        <c-side-bar />
        <div staticClass="v-app_content">
          <vd-container>
            <router-view />
          </vd-container>
        </div>
      </div>
    );
  }
}
