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
import { Theme, ThemeComponent } from 'void-ui';

/**
 * App
 */
@Component
export class VApp extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  private render(h: CreateElement): VNode {
    return (
      <div id="app" staticClass="v-app" class={[`vp-theme_${this.themeValue}`]}>
        <c-nav-bar />
        <router-view staticClass="v-app_wrapper" />
      </div>
    );
  }
}
