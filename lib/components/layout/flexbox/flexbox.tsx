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
} from '@void/ui/lib/components/base/variables';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type FlexAlign =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
export type FlexJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type Flex = 'initial' | 'auto' | 'none' | number;

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

  @Prop([String, Number, Object])
  public readonly order?: ResponsiveValues<number>;

  @Prop({ type: [Boolean, Object], default: false })
  public readonly hidden!: ResponsiveValues<boolean>;
  @Prop({ type: [Boolean, Object], default: true })
  public readonly show!: ResponsiveValues<boolean>;

  private percentage: string = '';

  @Watch('flex', { deep: true, immediate: true })
  private watchFlex(): void {
    this.$vd_media.subscribe(
      this,
      'flex',
      this.flex,
      (value: string | number | undefined) =>
        (this.percentage = typeof value === 'number' ? `${value}%` : ''),
    );
  }

  private beforeCreate(): void {
    if (this.$parent instanceof VdFlexbox) {
      this.parentFlexbox = this.$parent;
    }
  }

  private beforeDestroy(): void {
    this.$vd_media.unsubscribeAll(this);
  }

  public get style(): Style {
    return {
      [this.parentFlexbox &&
      (this.parentFlexbox.direction === 'column' ||
        this.parentFlexbox.direction === 'column-reverse')
        ? 'maxHeight'
        : 'maxWidth']: this.percentage,
    };
  }

  public get classes(): ClassName {
    return [
      {
        [`vdp-direction_${this.direction}`]: this.direction,
        [`vdp-wrap_${this.wrap}`]: this.wrap,

        [`vdp-align_${this.align}`]: this.align,
        [`vdp-justify_${this.justify}`]: this.justify,

        'is-gap': typeof this.gap === 'boolean' && this.gap,
        [`vdp-gap_${this.gap}`]: typeof this.gap === 'string',

        [`vdp-flex_${this.flex}`]: typeof this.flex === 'string',
        'is-percentage': this.percentage,
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
