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
} from '@void/ui/lib/void-ui';

/**
 * Component: NavBar
 */
@Component
export class CNavBar extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme!: Theme;
  public get $theme(): Theme {
    return this.theme || (this.$vd_theme && this.$vd_theme.theme) || 'lite';
  }

  public get classes(): ClassName {
    return [`cp-theme_${this.$theme}`];
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="c-nav-bar" class={this.classes}>
        <vd-flexbox staticClass="c-nav-bar_wrapper" align="center" gap>
          <vd-flexbox staticClass="c-nav-bar_item" flex="none" tag="a" router-link to="/">
            Void-UI
          </vd-flexbox>
          <vd-flexbox />
          <vd-flexbox
            staticClass="c-nav-bar_item"
            flex="none"
            tag="a"
            router-link
            to="/guideline"
          >
            指南
          </vd-flexbox>
          <vd-flexbox
            staticClass="c-nav-bar_item"
            flex="none"
            tag="a"
            router-link
            to="/components"
          >
            组件
          </vd-flexbox>
          <vd-flexbox
            staticClass="c-nav-bar_item"
            flex="none"
            tag="a"
            router-link
            to="/apis"
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
      </div>
    );
  }
}
