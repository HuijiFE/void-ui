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
import { ClassName, Theme, ThemeComponent, LinkLikeComponent } from '../../base';

/**
 * Component: List
 */
@Component
export class VdList extends Vue implements ThemeComponent {
  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || this.$vd_theme.theme;
  }

  @Prop({ type: [Boolean, Number], default: false })
  public readonly raise!: boolean | number;

  @Prop({ type: Boolean, default: false })
  public readonly gap!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly divided!: boolean;

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      {
        'is-raise': this.raise && typeof this.raise === 'boolean',
        [`vdp-raise_${this.raise}`]: this.raise && typeof this.raise === 'number',
        'is-gap': this.gap,
        'is-divided': this.divided,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    return (
      <ul staticClass="vd-list" class={this.classes}>
        {this.$slots.default}
      </ul>
    );
  }
}

/**
 * Component: ListItem
 */
@Component
export class VdListItem extends Vue implements LinkLikeComponent {
  @Prop()
  // tslint:disable-next-line:no-any
  public readonly contentClass?: any;

  @Prop({ type: String, default: 'div' })
  public readonly tag!: string;
  @Prop({ type: Boolean, default: false })
  public readonly routerLink!: boolean;

  private render(h: CreateElement): VNode {
    // TODO $attrs 的处理
    return (
      <li staticClass="vd-list_item">
        {h(
          this.routerLink ? 'router-link' : this.tag,
          {
            staticClass: 'vd-list_container',
            attrs: this.$attrs,
            props: this.routerLink
              ? {
                  tag: this.tag,
                  ...this.$attrs,
                }
              : undefined,
          },
          [
            this.$slots.left && <div staticClass="vd-list_left">{this.$slots.left}</div>,
            /* tslint:disable-next-line:no-unsafe-any */
            <div staticClass="vd-list_content" class={this.contentClass}>
              {this.$slots.default}
            </div>,
            this.$slots.right && (
              <div staticClass="vd-list_right">{this.$slots.right}</div>
            ),
          ],
        )}
      </li>
    );
  }
}
