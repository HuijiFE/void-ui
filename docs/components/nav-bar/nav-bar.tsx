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
import {
  Style,
  ClassName,
  Theme,
  Tone,
  Skin,
  Shape,
  Size,
  ThemeComponent,
  LinkLikeComponent,
} from 'void-ui';

/**
 * Component: NavBar
 */
@Component
export class CNavBar extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || (this.$vd_theme && this.$vd_theme.theme) || 'lite';
  }

  public languagePrefix: string = '';

  @Watch('$route', { immediate: true })
  private watchRoute(): void {
    this.languagePrefix = this.$route.matched[0].path;
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.themeValue}`];
  }

  private render(h: CreateElement): VNode {
    return (
      <header staticClass="c-nav-bar" class={this.classes}>
        <vd-flexbox staticClass="c-nav-bar_wrapper" align="center" gap>
          <vd-flexbox
            staticClass="c-nav-bar_item"
            flex="none"
            tag="a"
            router-link
            to={`${this.languagePrefix}`}
          >
            Void-UI
          </vd-flexbox>
          <vd-flexbox />
          <vd-flexbox
            staticClass="c-nav-bar_item"
            flex="none"
            tag="a"
            router-link
            to={`${this.languagePrefix}/guide`}
          >
            指南
          </vd-flexbox>
          <vd-flexbox
            staticClass="c-nav-bar_item"
            flex="none"
            tag="a"
            router-link
            to={`${this.languagePrefix}/components`}
          >
            组件
          </vd-flexbox>
          <vd-flexbox
            staticClass="c-nav-bar_item"
            flex="none"
            tag="a"
            router-link
            to={`${this.languagePrefix}/apis`}
          >
            API
          </vd-flexbox>
          <vd-flexbox flex="none">
            <vd-button
              skin="silk"
              onClick={() => this.$vd_theme && this.$vd_theme.switchColor()}
            >
              theme: {this.$vd_theme && this.$vd_theme.theme}
            </vd-button>
          </vd-flexbox>
        </vd-flexbox>
      </header>
    );
  }
}
