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
  Skin,
  Shape,
  Size,
  ThemeComponent,
  LinkLikeComponent,
  FlexDirection,
} from '../../base';
import { VdDropdown } from '../../layout/float/dropdown';

/**
 * Component: ButtonGroup
 */
@Component
export class VdButtonGroup extends Vue implements ThemeComponent {
  private dropdown?: VdDropdown;

  private isHover: boolean = false;
  private isActive: boolean = true;

  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || (this.$vd_theme && this.$vd_theme.theme) || 'lite';
  }

  @Prop({ type: String, default: 'primary' })
  public readonly tone!: Tone;

  @Prop({ type: String, default: 'fill' })
  public readonly skin!: Skin;

  @Prop({ type: String })
  public readonly hoverSkin?: Skin;

  @Prop({ type: String })
  public readonly activeSkin?: Skin;

  @Prop({ type: String, default: 'rect' })
  public readonly shape!: Shape;

  @Prop({ type: String, default: 'small' })
  public readonly size!: Size;

  @Prop({ type: String })
  public readonly direction?: FlexDirection;

  @Prop({ type: Boolean, default: false })
  public readonly gap!: boolean | Size;

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      `vdp-tone_${this.tone}`,
      `vdp-skin_${this.skin}`,
      `vdp-shape_${this.shape}`,
      `vdp-size_${this.size}`,
      `vdp-direction_${this.direction || (!!this.dropdown && 'column') || 'row'}`,
      {
        'is-gap': this.gap,
        'is-compact': !this.gap,
        'is-dropdown': !!this.dropdown,
      },
    ];
  }

  public onClick(event: MouseEvent): void {
    this.$emit('click', event);
    if (this.dropdown) {
      this.dropdown.hide();
    }
  }

  private beforeCreate(): void {
    let parent: Vue = this.$parent;
    for (let index = 0; index < 5; index++) {
      if (!parent) {
        break;
      }
      if (parent instanceof VdDropdown) {
        this.dropdown = parent;
        break;
      }
      parent = parent.$parent;
    }
  }

  private render(h: CreateElement): VNode {
    return h(
      'div',
      {
        staticClass: 'vd-button-group',
        class: this.classes,
      },
      [
        h(
          'div',
          {
            staticClass: 'vd-button-group_wrapper',
          },
          this.$slots.default,
        ),
      ],
    );
  }
}

/**
 * Component Button
 */
@Component
export class VdButton extends Vue implements ThemeComponent, LinkLikeComponent {
  private group?: VdButtonGroup;

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

  @Prop({ type: String })
  public readonly hoverSkin?: Skin;

  @Prop({ type: String, default: 'rect' })
  public readonly shape!: Shape;

  @Prop({ type: String, default: 'small' })
  public readonly size!: Size;

  @Prop({ type: Boolean, default: false })
  public readonly wide!: boolean;

  public get classes(): ClassName {
    return [
      `vdp-theme_${(this.group && this.group.themeValue) || this.themeValue}`,
      `vdp-tone_${(this.group && this.group.tone) || this.tone}`,
      `vdp-skin_${(this.group && this.group.skin) ||
        (this.hover && this.hoverSkin) ||
        this.skin}`,
      `vdp-shape_${(this.group && this.group.shape) || this.shape}`,
      `vdp-size_${(this.group && this.group.size) || this.size}`,
      {
        'is-wide': this.wide,
        'is-hover': this.hover,
        'is-router-link': this.routerLink,
        'is-disabled': this.disabled,
        'is-loading': this.loading,
        'vd-button-group_item': !!this.group,
      },
    ];
  }

  public hover: boolean = false;

  private eventHandler(event: MouseEvent): void {
    this.$emit(event.type, event);
    switch (event.type) {
      case 'click':
        if (this.group) {
          this.group.onClick(event);
        }
        break;
      case 'mouseenter':
        this.hover = true;
        break;
      case 'mouseleave':
        this.hover = false;
        break;

      default:
    }
  }

  private beforeCreate(): void {
    if (this.$parent instanceof VdButtonGroup) {
      this.group = this.$parent;
    }
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
          '!click': this.eventHandler,
          '!mouseenter': this.eventHandler,
          '!mouseleave': this.eventHandler,
        },
        nativeOn: {
          '!click': this.eventHandler,
          '!mouseenter': this.eventHandler,
          '!mouseleave': this.eventHandler,
        },
      },
      [
        (this.loading && (
          <span staticClass="vd-button_loading">
            <span staticClass="vd-button_loading-indicator" />
          </span>
        )) ||
          (this.$slots.left && (
            <span staticClass="vd-button_left">{this.$slots.left}</span>
          )),
        <span staticClass="vd-button_content">{this.$slots.default || this.label}</span>,
        this.$slots.right && (
          <span staticClass="vd-button_right">{this.$slots.right}</span>
        ),
      ],
    );
  }
}
