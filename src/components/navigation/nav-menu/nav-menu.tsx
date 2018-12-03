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
  ClassName,
  Theme,
  Tone,
  Size,
  ThemeComponent,
  LinkLikeComponent,
} from '../../base';

/**
 * Component: NavMenu
 */
@Component
export class VdNavMenu extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || (this.$vd_theme && this.$vd_theme.theme) || 'lite';
  }

  public get classes(): ClassName {
    return [`vdp-theme_${this.themeValue}`];
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-nav-menu" class={this.classes}>
        {this.$slots.default}
      </div>
    );
  }
}

/**
 * Component: NavMenuItem
 */
@Component
export class VdNavMenuItem extends Vue implements LinkLikeComponent {
  @Prop({ type: String, default: 'button' })
  public readonly tag!: string;
  @Prop({ type: Boolean, default: false })
  public readonly routerLink!: boolean;

  private render(h: CreateElement): VNode {
    return h(
      this.tag,
      {
        staticClass: 'vd-nav-menu_item',
      },
      this.$slots.default,
    );
  }
}
