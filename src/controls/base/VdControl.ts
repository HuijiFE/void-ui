import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from 'vue-property-decorator';
import {
  ControlGenre,
  ControlTheme,
  ControlSkin,
  ControlSize,
  ControlShape,
} from 'typings';

@Component
export class VdControl extends Vue {
  get componentName(): string | undefined {
    return this.$options.name;
  }

  // !!!Important!!!
  @Prop() disabled: boolean;
}

@Component
export class VdStylableControl extends VdControl {
  private static globalGenre: ControlGenre = 'lite';
  public static get GlobalGenre(): ControlGenre {
    return VdStylableControl.globalGenre;
  }
  public static set GlobalGenre(value: ControlGenre) {
    VdStylableControl.globalGenre = value;
  }

  @Prop() genre: ControlGenre;

  @Prop({ default: 'primary' })
  theme: ControlTheme;

  @Prop({ default: 'fill' })
  skin: ControlSkin;

  @Prop({ default: 'medium' })
  size: ControlSize;

  @Prop({ default: 'rect' })
  shape: ControlShape;

  get stylableClasses(): string[] {
    return [
      `genre-${this.genre || VdStylableControl.globalGenre}`,
      `theme-${this.theme}`,
      `skin-${this.skin}`,
      `size-${this.size}`,
      `shape-${this.shape}`,
    ];
  }
}

export interface VdLoadingControl {
  loading: boolean;
}
