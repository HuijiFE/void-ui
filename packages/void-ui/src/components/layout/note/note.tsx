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
import { ClassName, Theme, ThemeComponent, Tone } from '../../base';

/**
 * Component: Note
 */
@Component
export class VdNote extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  @Prop({ type: String, default: 'primary' })
  public readonly tone!: Tone;

  @Prop({ type: Boolean, default: false })
  public readonly bordered!: boolean;

  @Prop({ type: [Boolean, Number], default: false })
  public readonly raise!: boolean | number;

  @Prop({ type: Boolean, default: false })
  public readonly transparent!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly halfTransparent!: boolean;

  @Prop({ type: String, default: 'div' })
  public readonly tag!: string;

  @Prop({ type: String })
  public readonly title?: string;

  @Prop({ type: String, default: 'h3' })
  public readonly titleTag!: string;

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      `vdp-tone_${this.tone}`,
      {
        'is-bordered': this.bordered,
        'is-raise': this.raise && typeof this.raise === 'boolean',
        [`vdp-raise_${this.raise}`]: this.raise && typeof this.raise === 'number',
        'is-transparent': this.transparent,
        'is-half-transparent': this.halfTransparent,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    return h(
      this.tag,
      {
        staticClass: 'vd-note',
        class: this.classes,
      },
      [
        <div staticClass="vd-note_stick" />,
        this.title
          ? h(
              this.titleTag,
              {
                staticClass: 'vd-note_title',
              },
              this.title,
            )
          : '',
        <div staticClass="vd-note_content">{this.$slots.default}</div>,
      ],
    );
  }
}
