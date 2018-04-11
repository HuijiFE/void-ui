import { Component, Vue, Prop, Emit, Inject, Model, Provide, Watch } from 'vue-property-decorator';

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
export class VoidHub extends Vue {
  public static readonly $void: VoidHub = new VoidHub();

  public theme: Theme = 'lite';
}

/**
 * Base control class for Void-UI.
 */
@Component
export class VdControl extends Vue {
  private $vdParent: VdControl;

  @Prop({ type: String })
  protected theme: Theme;

  public get $theme(): Theme {
    return this.theme || this.$vdParent ? this.$vdParent.$theme : VoidHub.$void.theme;
  }

  @Prop({ type: String, default: 'primary' })
  protected tone: Tone;

  @Prop({ type: String, default: 'fill' })
  protected skin: Skin;

  @Prop({ type: String, default: 'rect' })
  protected shape: Shape;

  @Prop({ type: String, default: 'medium' })
  protected size: Size;

  @Prop({ type: Boolean, default: false })
  protected disabled: boolean;

  @Prop({ type: Boolean, default: false })
  protected bordered: boolean;

  @Prop({ type: [Number, String], default: 0 })
  protected raise: number | string;

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
