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
  LinkLikeComponent,
  FlexDirection,
} from '../../base';

/**
 * Component: Card
 */
@Component
export class VdCard extends Vue implements ThemeComponent, LinkLikeComponent {
  @Prop({ type: String, default: 'section' })
  public readonly tag!: string;
  @Prop({ type: Boolean, default: false })
  public readonly routerLink!: boolean;

  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  @Prop(String)
  public readonly direction?: FlexDirection;

  @Prop({ type: Boolean, default: false })
  public readonly bordered!: boolean;

  @Prop({ type: [Boolean, Number], default: false })
  public readonly raise!: boolean | number;

  @Prop({ type: Boolean, default: false })
  public readonly transparent!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly translucent!: boolean;

  @Prop({ type: String })
  public readonly title?: string;

  @Prop({ type: String, default: 'h3' })
  public readonly titleTag!: string;

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      {
        [`vdp-direction_${this.direction}`]: this.direction,
        'is-bordered': this.bordered,
        'is-raise': this.raise && typeof this.raise === 'boolean',
        [`vdp-raise_${this.raise}`]: this.raise && typeof this.raise === 'number',
        'is-transparent': this.transparent,
        'is-translucent': this.translucent,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    return h(
      this.routerLink ? 'router-link' : this.tag,
      {
        staticClass: 'vd-card',
        class: this.classes,
        props: this.routerLink
          ? {
              tag: this.tag,
              ...this.$attrs,
            }
          : undefined,
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
  @Prop({ type: String, default: 'header' })
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
 * Component: CardFooter
 */
@Component
export class VdCardFooter extends Vue {
  @Prop({ type: String, default: 'footer' })
  public readonly tag!: string;

  private render(h: CreateElement): VNode {
    return h(
      this.tag,
      {
        staticClass: 'vd-card_footer',
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
 * Component: CardTitle
 */
@Component
export class VdCardTitle extends Vue {
  @Prop({ type: String, default: 'h3' })
  public readonly tag!: string;

  private render(h: CreateElement): VNode {
    return h(
      this.tag,
      {
        staticClass: 'vd-card_title',
      },
      this.$slots.default,
    );
  }
}

/**
 * Component: CardSummary
 */
@Component
export class VdCardSummary extends Vue {
  @Prop({ type: String, default: 'p' })
  public readonly tag!: string;

  private render(h: CreateElement): VNode {
    return h(
      this.tag,
      {
        staticClass: 'vd-card_summary',
      },
      this.$slots.default,
    );
  }
}

/**
 * Component: CardDivider
 */
@Component
export class VdCardDivider extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="vd-card_divider" />;
  }
}
