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
  ControlTone,
  ControlSkin,
  ControlSize,
  ControlShape,
} from 'typings';

/* Hub */

@Component
export class VdHub extends Vue {
  // for global theme
  genre: ControlGenre = 'lite';
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

export type ControlRaise = boolean | number | string;

@Component
export class VdStylableControl extends VdControl {
  @Prop() genre: ControlGenre;

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
      `genre-${this.genre || this.$void.genre}`,
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
