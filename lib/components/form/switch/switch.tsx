import Vue, { CreateElement, VNode } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { ClassName, Theme, ThemeComponent, Direction } from '../../base';
import { mixinFormComponent, FormComponent } from '../_base';
import { VdForm } from '../form/form';

/**
 * Component: Switch
 */
@Component({
  mixins: [mixinFormComponent],
})
export class VdSwitch extends Vue implements ThemeComponent, FormComponent {
  public readonly form?: VdForm;

  @Prop({ type: String })
  public readonly theme?: Theme;
  public get themeValue(): Theme {
    return this.theme || (this.form && this.form.themeValue) || this.$vd_theme.theme;
  }

  @Prop({ type: String })
  public readonly id?: string;

  @Prop({ type: String })
  public readonly name?: string;

  @Model('change', { type: [Boolean, String, Number], required: true })
  public readonly model!: boolean | string | number;

  @Prop({ type: [Boolean, String, Number], default: true })
  public readonly trueValue!: boolean | string | number;

  @Prop({ type: [Boolean, String, Number], default: false })
  public readonly falseValue!: boolean | string | number;

  @Prop({ type: String })
  public readonly label?: string;

  @Prop({ type: String })
  public readonly trueLabel?: string;

  @Prop({ type: String })
  public readonly falseLabel?: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  public get checked(): boolean {
    return this.trueValue === this.model;
  }

  private onChange(event: Event): void {
    this.$emit('change', this.checked ? this.falseValue : this.trueValue);
  }

  public get classes(): ClassName {
    return [
      `vdp-theme_${this.themeValue}`,
      {
        'is-checked': this.checked,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    // tslint:disable:react-a11y-role-has-required-aria-props
    return (
      <label
        staticClass="vd-switch"
        class={this.classes}
        role="switch"
        aria-checked={this.checked}
        tabindex={this.disabled ? -1 : 0}
      >
        <input
          staticClass="vd-switch_implicit"
          type="checkbox"
          id={this.id}
          name={this.name}
          true-value={this.trueValue}
          false-value={this.falseValue}
          checked={this.checked}
          onChange={this.onChange}
          aria-hidden="true"
          tabindex="-1"
        />
        <span staticClass="vd-switch_symbol">
          <span staticClass="vd-switch_symbol-inner" />
        </span>
        <span staticClass="vd-switch_label">
          {this.$slots.default ||
            (this.checked ? this.trueLabel : this.falseLabel) ||
            this.label}
        </span>
      </label>
    );
  }
}
