import { Location } from 'vue-router/types/router';
import { FontAwesomeIconProps } from '@void/controls/basic/icon/VdIcon';
import {
  Component,
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Provide,
  Watch,
} from 'vue-property-decorator';

/**
 * Available values for control property theme.
 */
export enum Theme {
  lite = 'lite',
  dark = 'dark',
}

/**
 * Available values for control property tone.
 */
export enum Tone {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

/**
 * Available values for control property skin.
 */
export enum Skin {
  fill = 'fill',
  flat = 'flat',
  plain = 'plain',
  silk = 'silk',
}

/**
 * Available values for control property shape.
 */
export enum Shape {
  rect = 'rect',
  pill = 'pill',
  square = 'square',
  circle = 'circle',
}

/**
 * Available values for control property size.
 */
export enum Size {
  xsmall = 'xsmall',
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
}

/**
 * Static hub for Void-UI.
 */
@Component
export class VoidHub extends Vue {
  public static readonly $void: VoidHub = new VoidHub();

  public theme: Theme = Theme.lite;

  public loading: boolean = false;
}

/**
 * Base control class for Void-UI.
 */
@Component
export class VdControl extends Vue {
  @Prop({ type: String })
  public theme!: Theme;

  public get $theme(): Theme {
    return this.theme || VoidHub.$void.theme;
  }

  @Prop({ type: String, default: 'primary' })
  public tone!: Tone;

  @Prop({ type: String, default: 'fill' })
  public skin!: Skin;

  @Prop({ type: String, default: 'rect' })
  public shape!: Shape;

  @Prop({ type: String, default: 'medium' })
  public size!: Size;

  @Prop({ type: [Number, String], default: 0 })
  public raise!: number | string;

  @Prop({ type: Boolean, default: false })
  public disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public bordered!: boolean;

  // public get classes(): ClassName {
  //   return [
  //     `vdp-theme_${this.$theme}`,
  //     `vdp-tone_${this.tone}`,
  //     `vdp-skin_${this.skin}`,
  //     `vdp-shape_${this.shape}`,
  //     `vdp-size_${this.size}`,
  //     {
  //       [`vda-raise-${this.raise}`]: this.raise,
  //       'is-disabled': this.disabled,
  //       'is-bordered': this.disabled,
  //     },
  //   ];
  // }
}

/**
 * Restriction for controls based on router-link or anchor element.
 */
export interface RouterControl {
  to: string | Location;
  href: string;
  target: string;
}

/**
 * Restriction for controls those include icons.
 */
export interface IconControl {
  icon: string;
  fa: string | string[] | FontAwesomeIconProps;
}

/**
 * Restriction for controls those support loading status.
 */
export interface LoadingControl {
  loading: boolean;
}
