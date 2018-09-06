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
import { ClassName, Theme, ThemeComponent } from '@void/ui/lib/components/base';

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

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      {
        'is-bordered': this.bordered,
        'is-raise': this.raise && typeof this.raise === 'boolean',
        [`vdp-raise_${this.raise}`]: this.raise && typeof this.raise === 'number',
      },
    ];
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-card" class={this.classes}>
        {this.$slots.default}
      </div>
    );
  }
}

/**
 * Component: CardHeader
 */
@Component
export class VdCardHeader extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="vd-card_header">{this.$slots.default}</div>;
  }
}

/**
 * Component: CardContent
 */
@Component
export class VdCardContent extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="vd-card_content">{this.$slots.default}</div>;
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
