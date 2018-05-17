import {
  Vue,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { Size } from '@void/controls/base/VdControl';

/**
 * Available values for flexbox property flex.
 */
export type Flex =
  // region ======== Flex values ========
  | 'average'
  | 'auto'
  | 'initial'
  | 'none'
  | 33
  | 66
  | '33'
  | '66'
  | 5
  | 10
  | 15
  | 20
  | 25
  | 30
  | 35
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 75
  | 80
  | 85
  | 90
  | 95
  | 100
  | '5'
  | '10'
  | '15'
  | '20'
  | '25'
  | '30'
  | '35'
  | '40'
  | '45'
  | '50'
  | '55'
  | '60'
  | '65'
  | '70'
  | '75'
  | '80'
  | '85'
  | '90'
  | '95'
  | '100';
// endregion

/**
 * Available values for flexbox property gutter.
 */
export enum FlexGutter {
  none = 'none',
  auto = 'auto',
  xsmall = 'xsmall',
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
}

/**
 * Available values for flexbox property direction.
 */
export enum FlexDirection {
  row = 'row',
  rowReverse = 'row-reverse',
  column = 'column',
  columnReverse = 'column-reverse',
}

/**
 * Available values for flexbox property wrap.
 */
export enum FlexWrap {
  nowrap = 'nowrap',
  wrap = 'wrap',
  wrapReverse = 'wrap-reverse',
}

/**
 * Available values for flexbox property justify.
 */
export enum FlexJustify {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center',
  spaceBetween = 'space-between',
  spaceAround = 'space-around',
}

/**
 * Available values for flexbox property align and align-self.
 */
export enum FlexAlign {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center',
  baseline = 'baseline',
  stretch = 'stretch',
}

/**
 * Control Flexbox
 */
@Component
export class VdFlexbox extends Vue {
  /**
   * Flexibility.
   */
  @Prop({ type: [String, Number] })
  public readonly flex!: Flex;

  @Prop({ type: [String, Number] })
  public readonly flexXsmall!: Flex;

  @Prop({ type: [String, Number] })
  public readonly flexSmall!: Flex;

  @Prop({ type: [String, Number] })
  public readonly flexMedium!: Flex;

  @Prop({ type: [String, Number] })
  public readonly flexLarge!: Flex;

  @Prop({ type: [String, Number] })
  public readonly flexXlarge!: Flex;

  /**
   * Visibility.
   */
  @Prop({ type: Boolean, default: false })
  public readonly hidden!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly hiddenXsmall!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly hiddenSmall!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly hiddenMedium!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly hiddenLarge!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly hiddenXlarge!: boolean;

  /**
   * Gutter between sub flexbox content.
   */
  @Prop({ type: String })
  public readonly gutter!: FlexGutter;

  /**
   * Flex flow direction.
   */
  @Prop({ type: String })
  public readonly direction!: FlexDirection;

  /**
   * Flex line wrapping.
   */
  @Prop({ type: String })
  public readonly wrap!: FlexWrap;

  // @Prop({ type: Number })
  // public readonly order: number;

  /**
   * Axis alignment.
   */
  @Prop({ type: String })
  public readonly justify!: FlexJustify;

  /**
   * Cross alignment.
   */
  @Prop({ type: String })
  public readonly align!: FlexAlign;

  /**
   * Cross alignment for itself.
   */
  @Prop({ type: String })
  public readonly alignSelf!: FlexAlign;

  private render(h: CreateElement): VNode {
    return h(
      'div',
      {
        class: [
          'vd-flexbox',
          {
            [`vdp-flex_${this.flex}`]: this.flex,
            [`vdp-flex-xsmall_${this.flexXsmall}`]: this.flexXsmall,
            [`vdp-flex-small_${this.flexSmall}`]: this.flexSmall,
            [`vdp-flex-medium_${this.flexMedium}`]: this.flexMedium,
            [`vdp-flex-large_${this.flexLarge}`]: this.flexLarge,
            [`vdp-flex-xlarge_${this.flexXlarge}`]: this.flexXlarge,
            'is-hidden': this.hidden,
            'is-hidden-xsmall': this.hiddenXsmall,
            'is-hidden-small': this.hiddenSmall,
            'is-hidden-medium': this.hiddenMedium,
            'is-hidden-large': this.hiddenLarge,
            'is-hidden-xlarge': this.hiddenXlarge,
            [`vdp-gutter_${this.gutter}`]: this.gutter,
            [`vdp-direction_${this.direction}`]: this.direction,
            [`vdp-wrap_${this.wrap}`]: this.wrap,
            [`vdp-justify_${this.justify}`]: this.justify,
            [`vdp-align_${this.align}`]: this.align,
            [`vdp-align-self_${this.alignSelf}`]: this.alignSelf,
          },
        ],
      },
      [this.$slots.default],
    );
  }
}
