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
  public flex: Flex;

  @Prop({ type: [String, Number] })
  public flexXsmall: Flex;

  @Prop({ type: [String, Number] })
  public flexSmall: Flex;

  @Prop({ type: [String, Number] })
  public flexMedium: Flex;

  @Prop({ type: [String, Number] })
  public flexLarge: Flex;

  @Prop({ type: [String, Number] })
  public flexXlarge: Flex;

  /**
   * Visibility.
   */
  @Prop({ type: Boolean, default: false })
  public hidden: boolean;

  @Prop({ type: Boolean, default: false })
  public hiddenXsmall: boolean;

  @Prop({ type: Boolean, default: false })
  public hiddenSmall: boolean;

  @Prop({ type: Boolean, default: false })
  public hiddenMedium: boolean;

  @Prop({ type: Boolean, default: false })
  public hiddenLarge: boolean;

  @Prop({ type: Boolean, default: false })
  public hiddenXlarge: boolean;

  @Prop({ type: String })
  public gutter: FlexGutter;

  /**
   * Flex flow direction.
   */
  @Prop({ type: String, default: 'row' })
  public direction: FlexDirection;

  /**
   * Flex line wrapping.
   */
  @Prop({ type: String, default: 'wrap' })
  public wrap: FlexWrap;

  // @Prop({ type: Number })
  // public order: number;

  /**
   * Axis alignment.
   */
  @Prop({ type: String, default: 'flex-start' })
  public justify: FlexJustify;

  /**
   * Cross alignment.
   */
  @Prop({ type: String, default: 'flex-start' })
  public align: FlexAlign;

  /**
   * Cross alignment for itself.
   */
  @Prop({ type: String })
  public alignSelf: FlexAlign;

  private render(h: CreateElement): VNode {
    return h(
      'div',
      {
        class: [
          'vd-flexbox',
          `vdp-flex-${this.flex}`,
          {
            [`vdp-flex-xsmall-${this.flexXsmall}`]: this.flexXsmall,
            [`vdp-flex-small-${this.flexSmall}`]: this.flexSmall,
            [`vdp-flex-medium-${this.flexMedium}`]: this.flexMedium,
            [`vdp-flex-large-${this.flexLarge}`]: this.flexLarge,
            [`vdp-flex-xlarge-${this.flexXlarge}`]: this.flexXlarge,
            'is-hidden': this.hidden,
            'is-hidden-xsmall': this.hiddenXsmall,
            'is-hidden-small': this.hiddenSmall,
            'is-hidden-medium': this.hiddenMedium,
            'is-hidden-large': this.hiddenLarge,
            'is-hidden-xlarge': this.hiddenXlarge,
            [`vdp-gutter-${this.gutter}`]: this.gutter,
          },
          `vdp-direction-${this.direction}`,
          `vdp-wrap-${this.wrap}`,
          `vdp-justify-${this.justify}`,
          `vdp-align-${this.align}`,
          `vdp-align-self-${this.alignSelf}`,
        ],
      },
      [this.$slots.default],
    );
  }
}
