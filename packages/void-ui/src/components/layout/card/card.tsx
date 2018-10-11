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
import { ClassName, Theme, ThemeComponent } from '../../base';

/**
 * Component: Card
 */
@Component
export class VdCard extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

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

  @Prop({ type: String, default: 'h2' })
  public readonly titleTag!: string;

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
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
        staticClass: 'vd-card',
        class: this.classes,
      },
      [
        this.title ? (
          <vd-card-header tag={this.titleTag}>{this.title}</vd-card-header>
        ) : (
          ''
        ),
        this.$slots.default,
      ],
    );
  }
}

/**
 * Component: CardHeader
 */
@Component
export class VdCardHeader extends Vue {
  @Prop({ type: String, default: 'h2' })
  public readonly tag!: string;

  private render(h: CreateElement): VNode {
    return h(
      this.tag,
      {
        staticClass: 'vd-card_header',
      },
      this.$slots.default,
    );
  }
}

/**
 * Component: CardContent
 */
@Component
export class VdCardContent extends Vue {
  @Prop({ type: String, default: 'div' })
  public readonly tag!: string;

  private render(h: CreateElement): VNode {
    return h(
      this.tag,
      {
        staticClass: 'vd-card_content',
      },
      this.$slots.default,
    );
  }
}

/**
 * Component: CardContent
 */
@Component
export class VdCardSeparator extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="vd-card_separator" />;
  }
}
