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
}

/**
 * Base control class for Void-UI.
 */
@Component
export class VdControl extends Vue {
  @Prop({ type: String })
  public theme: Theme;

  public get $theme(): Theme {
    return this.theme || VoidHub.$void.theme;
  }

  @Prop({ type: String, default: 'primary' })
  public tone: Tone;

  @Prop({ type: String, default: 'fill' })
  public skin: Skin;

  @Prop({ type: String, default: 'rect' })
  public shape: Shape;

  @Prop({ type: String, default: 'medium' })
  public size: Size;

  @Prop({ type: Boolean, default: false })
  public disabled: boolean;

  @Prop({ type: Boolean, default: false })
  public bordered: boolean;

  @Prop({ type: [Number, String], default: 0 })
  public raise: number | string;
}
