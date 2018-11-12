// Learn more:
// https://drafts.csswg.org/css-flexbox-1/
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout

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
  Size,
  ResponsiveValues,
  LinkLikeComponent,
  FlexDirection,
  FlexWrap,
  FlexJustify,
  FlexAlign,
  Flex,
} from '../../base';

export interface VdFlexbox {
  props: {
    tag?: keyof HTMLElementTagNameMap;
  };
  event: {
    onClick?(event?: MouseEvent): void;
  };
}

/**
 * Component Flexbox
 */
@Component
export class VdFlexbox extends Vue implements LinkLikeComponent {
  private parentFlexbox?: VdFlexbox;

  @Prop({ type: String, default: 'div' })
  public readonly tag!: keyof HTMLElementTagNameMap;

  @Prop({ type: Boolean, default: false })
  public readonly routerLink!: boolean;

  @Prop(String)
  public readonly direction?: FlexDirection;
  @Prop(String)
  public readonly wrap?: FlexWrap;

  @Prop(String)
  public readonly align?: string;
  @Prop(String)
  public readonly justify?: string;

  @Prop({ type: [Boolean, String], default: false })
  public readonly gap!: boolean | Size;

  @Prop([String, Number, Object])
  public readonly flex?: ResponsiveValues<Flex>;

  @Prop([Number, Object])
  public readonly order?: ResponsiveValues<number>;

  @Prop({ type: [Boolean, Object], default: false })
  public readonly hidden!: ResponsiveValues<boolean>;

  private percentageValue: string | null = null;

  @Watch('flex', { deep: true, immediate: true })
  private watchFlex(flex: ResponsiveValues<Flex>): void {
    this.$vd_media.subscribe(
      this,
      'flex',
      flex,
      value =>
        (this.percentageValue =
          typeof value === 'number' ? `${value > 1 ? value : value * 100}%` : null),
    );
  }

  private orderValue: string | number | null = null;

  @Watch('order', { deep: true, immediate: true })
  private watchOrder(order: ResponsiveValues<number>): void {
    this.$vd_media.subscribe(
      this,
      'order',
      order,
      value => (this.orderValue = value === undefined ? null : value),
    );
  }

  private hiddenValue: boolean = false;

  @Watch('hidden', { deep: true, immediate: true })
  private watchHide(hidden: ResponsiveValues<boolean>): void {
    this.$vd_media.subscribe(
      this,
      'hidden',
      hidden,
      value => (this.hiddenValue = value === undefined ? false : value),
    );
  }

  private beforeCreate(): void {
    if (this.$parent instanceof VdFlexbox) {
      this.parentFlexbox = this.$parent;
    }
  }

  public get style(): Style {
    return {
      [this.parentFlexbox &&
      (this.parentFlexbox.direction === 'column' ||
        this.parentFlexbox.direction === 'column-reverse')
        ? 'maxHeight'
        : 'maxWidth']: this.percentageValue,
      order: this.orderValue,
    };
  }

  public get classes(): ClassName {
    return [
      {
        'is-router-link': this.routerLink,

        [`vdp-direction_${this.direction}`]: this.direction,
        [`vdp-wrap_${this.wrap}`]: this.wrap,

        [`vdp-align_${this.align}`]: this.align,
        [`vdp-justify_${this.justify}`]: this.justify,

        'is-gap': typeof this.gap === 'boolean' && this.gap,
        [`vdp-gap_${this.gap}`]: typeof this.gap === 'string',

        [`vdp-flex_${this.flex}`]: typeof this.flex === 'string',
        'is-percentage': this.percentageValue,

        'is-hidden': this.hiddenValue,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    return h(
      this.routerLink ? 'router-link' : this.tag,
      {
        style: this.style,
        staticClass: 'vd-flexbox',
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
