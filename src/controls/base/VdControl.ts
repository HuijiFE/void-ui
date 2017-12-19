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

export type ControlTheme = 'lite' | 'dark';
export type ControlTone = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ControlSkin = 'fill' | 'flat' | 'plain' | 'silk';
export type ControlSize = 'small' | 'medium' | 'large';
export type ControlShape = 'rect' | 'square' | 'circle';
export type ControlRaise = boolean | number | string;

/* Hub */

@Component
export class VdHub extends Vue {
  // for global theme
  theme: ControlTheme = 'lite';
}

/* Base Control */

@Component
export class VdControl extends Vue {
  // single instance for global state management
  private static readonly hub = new VdHub();
  get $void(): VdHub {
    return VdControl.hub;
  }

  get componentName(): string | undefined {
    return this.$options.name;
  }

  @Prop({ default: false })
  disabled: boolean | '';

  get isDisabled(): boolean {
    return this.disabled || this.disabled === '';
  }
}

/* Stylable Control */

@Component
export class VdStylableControl extends VdControl {
  @Prop() theme: ControlTheme;

  @Prop({ type: String, default: 'primary' })
  tone: ControlTone;

  @Prop({ type: String, default: 'fill' })
  skin: ControlSkin;

  @Prop({ type: String, default: 'medium' })
  size: ControlSize;

  @Prop({ type: String, default: 'rect' })
  shape: ControlShape;

  @Prop({ type: [Boolean, Number, String], default: true })
  raise: ControlRaise;

  @Prop({ type: Boolean, default: true })
  bordered: boolean | '';

  get isBordered(): boolean {
    return this.bordered || this.bordered === '';
  }

  get stylableClasses(): ClassNames {
    return [
      `theme-${this.theme || this.$void.theme}`,
      `tone-${this.tone}`,
      `skin-${this.skin}`,
      `size-${this.size}`,
      `shape-${this.shape}`,
      `raise-${this.raise}`,
      {
        disabled: this.isDisabled,
        bordered: this.isBordered,
      },
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

/* Gradable Control */
export type ControlGrade = 1 | 2 | 3 | 4 | 5 | '1' | '2' | '3' | '4' | '5';

@Component
export class VdGradableControl extends VdControl {
  @Prop() grade: ControlGrade;

  get gradableClasses(): ClassNames {
    return [`grade-${this.grade}`];
  }
}

/* Loading Control */

export interface VdLoadingControl {
  loading: boolean;
}
