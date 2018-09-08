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
} from '../../base';

/**
 * Component Button
 */
@Component
export class VdButton extends Vue implements ThemeComponent, LinkLikeComponent {
  @Prop({ type: String, default: 'button' })
  public readonly tag!: string;

  @Prop({ type: Boolean, default: false })
  public readonly routerLink!: boolean;

  // tslint:disable-next-line:no-reserved-keywords
  @Prop({ type: String, default: 'button' })
  public readonly type!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly loading!: boolean;

  @Prop({ type: String })
  public readonly label?: string;

  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || (this.$vd_theme && this.$vd_theme.theme) || 'lite';
  }

  @Prop({ type: String, default: 'primary' })
  public readonly tone!: Tone;

  @Prop({ type: String, default: 'fill' })
  public readonly skin!: Skin;

  @Prop({ type: String, default: 'rect' })
  public readonly shape!: Shape;

  @Prop({ type: String, default: 'small' })
  public readonly size!: Size;

  private onClick(event: MouseEvent): void {
    this.$emit('click', event);
  }

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      `vdp-tone_${this.tone}`,
      `vdp-skin_${this.skin}`,
      `vdp-shape_${this.shape}`,
      `vdp-size_${this.size}`,
      {
        'is-router-link': this.routerLink,
        'is-disabled': this.disabled,
        'is-loading': this.loading,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    return h(
      this.routerLink ? 'router-link' : this.tag,
      {
        staticClass: 'vd-button',
        class: this.classes,
        attrs: {
          type: this.type,
          disabled: this.disabled || this.loading,
        },
        props: this.routerLink
          ? {
              tag: this.tag,
              ...this.$attrs,
            }
          : undefined,
        on: {
          '!click': this.onClick,
        },
        nativeOn: {
          '!click': this.onClick,
        },
      },
      [
        this.loading ? (
          <span staticClass="vd-button_loading">
            <span staticClass="vd-button_loading-indicator" />
          </span>
        ) : this.$slots.left ? (
          <span staticClass="vd-button_left">{this.$slots.left}</span>
        ) : (
          h()
        ),
        <span staticClass="vd-button_content">{this.$slots.default || this.label}</span>,
        this.$slots.right ? (
          <span staticClass="vd-button_right">{this.$slots.right}</span>
        ) : (
          h()
        ),
      ],
    );
  }
}
