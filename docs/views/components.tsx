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
import { RouteConfig } from 'vue-router';
import zhCN from '@docs/articles/zh-CN/all';
import { SideBarGroup } from '@docs/components/all';

const routeConfigMap: Record<string, RouteConfig[]> = {
  'zh-CN': zhCN,
};

const categories: string[] = ['basic', 'color', 'general', 'layout', 'form'];

/**
 * View: Components
 */
@Component
export class VComponents extends Vue {
  public path: string = 'test';

  private menuData: SideBarGroup[] = [];

  private language!: string;

  @Watch('$route', { immediate: true })
  private watchRoute(): void {
    const language: string = this.$route.matched[0].path.replace('/', '');
    const routeConfigs: RouteConfig[] = routeConfigMap[language];
    if (this.language !== language && routeConfigs) {
      this.language = language;

      this.menuData = categories.map<SideBarGroup>(cat => ({
        label: cat,
        items: routeConfigs
          .filter(conf => conf.path.startsWith(cat))
          .map(({ path, name }) => ({
            label: name as string,
            path: `/${language}/components/${path}`,
          })),
      }));
    }
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-components">
        <c-side-bar items-source={this.menuData} />
        <div staticClass="v-app_content">
          <vd-container>
            <transition name="rise-fade">
              <router-view />
            </transition>
          </vd-container>
        </div>
      </div>
    );
  }
}
