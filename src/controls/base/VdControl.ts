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
export class Void extends Vue {
  genre: ControlGenre = 'lite';
}

@Component
export class VdStylableControl extends VdControl {
  private static readonly globalVoid = new Void();
  get $void(): Void {
    return VdStylableControl.globalVoid;
  }

  @Prop() genre: ControlGenre;

  @Prop({ default: 'primary' })
  theme: ControlTheme;

  @Prop() plain: boolean;

  @Prop({ default: 'fill' })
  skin: ControlSkin;

  @Prop({ default: 'medium' })
  size: ControlSize;

  @Prop({ default: 'rect' })
  shape: ControlShape;

  get stylableClasses(): string[] {
    return [
      `genre-${this.genre || this.$void.genre}`,
      `theme-${this.theme}`,
      this.plain ? `skin-plain` : `skin-${this.skin}`,
      `size-${this.size}`,
      `shape-${this.shape}`,
    ];
  }

  private a = '1';
  private b = '2';
  private c = '3';

  // 123
  public get dddd(): string {
    return this.a + this.b + this.c;
  }
}

export interface VdLoadingControl {
  loading: boolean;
}
