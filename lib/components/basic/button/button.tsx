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
  ThemeComponent,
  Tone,
  Skin,
  Shape,
  Size,
} from '@void/ui/lib/components/base';

/**
 * Component Button
 */
@Component
export class VdButton extends Vue implements ThemeComponent {
  @Prop({ type: String, default: 'button' })
  public readonly tag!: keyof HTMLElementTagNameMap;

  // tslint:disable-next-line:no-reserved-keywords
  @Prop({ type: String, default: 'button' })
  public readonly type!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: String })
  public readonly theme!: Theme;
  public get $theme(): Theme {
    return this.theme || (this.$vdTheme && this.$vdTheme.theme) || 'lite';
  }

  @Prop({ type: String, default: 'primary' })
  public readonly tone!: Tone;

  @Prop({ type: String, default: 'fill' })
  public readonly skin!: Skin;

  @Prop({ type: String, default: 'rect' })
  public readonly shape!: Shape;

  @Prop({ type: String, default: 'medium' })
  public readonly size!: Size;

  private onClick(event: MouseEvent): void {
    this.$emit('click', event);
  }

  public get classes(): ClassName {
    return [`vdp-theme_${this.$theme}`];
  }

  private render(h: CreateElement): VNode {
    return h(
      this.tag,
      {
        staticClass: 'vd-button',
        class: this.classes,
        domProps: {
          type: this.type,
          disabled: this.disabled,
        },
        on: {
          click: this.onClick,
        },
      },
      [this.$slots.default],
    );
  }
}
