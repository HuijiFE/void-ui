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

  @Prop(String)
  public readonly size?: Size;

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      {
        [`vdp-size_${this.size}`]: this.size,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-nav-menu" class={this.classes}>
        <div staticClass="vd-nav-menu_wrapper">{this.$slots.default}</div>
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

  @Prop({ type: Boolean, default: false })
  public readonly active!: boolean;

  public get classes(): ClassName {
    return [
      {
        'is-active': this.active,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    return h(
      this.routerLink ? 'router-link' : this.tag,
      {
        staticClass: 'vd-nav-menu_item',
        class: this.classes,
        props: this.routerLink
          ? {
              tag: this.tag,
              ...this.$attrs,
            }
          : undefined,
      },
      this.$slots.default,
    );
  }
}
