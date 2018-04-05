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
export type Theme = 'lite' | 'dark';

/**
 * Available values for control property tone.
 */
export type Tone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

/**
 * Available values for control property skin.
 */
export type Skin = 'fill' | 'flat' | 'plain' | 'silk';

/**
 * Available values for control property shape.
 */
export type Shape = 'rect' | 'pill' | 'square' | 'circle';

/**
 * Available values for control property size.
 */
export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

/**
 * Static hub for Void-UI.
 */
@Component
export class Void extends Vue {
  @Prop({ type: String })
  public theme: Theme = 'lite';
}

/**
 * Base control class for Void-UI.
 */
@Component
export class VdControl extends Vue {
  /**
   * Static hub for Void-UI.
   */
  public static readonly $void: VdControl = new VdControl();
  public get $void(): VdControl {
    return VdControl.$void;
  }

  private $vdParent?: VdControl;

  @Prop({ type: String })
  public theme: Theme;

  public get $theme(): Theme {
    return this.theme || (this.$vdParent ? this.$vdParent.$theme : VdControl.$void.theme);
  }

  @Prop({ type: String })
  public tone: Tone = 'primary';

  @Prop({ type: String })
  public skin: Skin = 'fill';

  @Prop({ type: String })
  public shape: Shape = 'rect';

  @Prop({ type: String })
  public size: Size = 'medium';

  @Prop({ type: Boolean, default: false })
  public disabled: boolean = false;

  @Prop({ type: Boolean, default: false })
  public bordered: boolean = false;

  @Prop({ type: [Number, String], default: 0 })
  public raise: number | string = 0;

  constructor() {
    super();

    let parent: Vue = this.$parent;
    while (parent) {
      if (parent instanceof VdControl) {
        this.$vdParent = parent;
        break;
      }
      parent = <VdControl>parent.$parent;
    }
  }
}
