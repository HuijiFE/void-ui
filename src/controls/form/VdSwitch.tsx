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
import { VdControl } from '@void/controls/base/VdControl';
import { FormWidget } from '@void/controls/form/VdForm';

export interface Switch extends FormWidget {
  label?: string;
  trueLabel?: string;
  falseLabel?: string;
  trueValue: true | string | number;
  falseValue: false | string | number;
}

/**
 * Control Switch
 */
@Component
export class VdSwitch extends VdControl implements Switch {
  @Prop({ type: String })
  public readonly id!: string;

  @Prop({ type: String })
  public readonly name!: string;

  @Prop({ type: String })
  public readonly label!: string;

  @Prop({ type: String })
  public readonly trueLabel!: string;

  @Prop({ type: String })
  public readonly falseLabel!: string;

  @Prop({ type: [Boolean, String, Number], default: true })
  public readonly trueValue!: true | string | number;

  @Prop({ type: [Boolean, String, Number], default: false })
  public readonly falseValue!: false | string | number;

  @Model('change', { type: [Boolean, String, Number], required: true })
  public readonly sourceValue!: boolean | string | number;

  public get checked(): boolean {
    return this.trueValue === this.sourceValue;
  }

  public get classes(): ClassName {
    return [
      'vd-switch',
      `vdp-theme_${this.$theme}`,
      `vdp-shape_${this.shape}`,
      {
        'is-checked': this.checked,
        'is-disabled': this.disabled,
      },
    ];
  }

  private onChange(): void {
    this.$emit('change', this.checked ? this.falseValue : this.trueValue);
  }

  private render(h: CreateElement): VNode {
    // tslint:disable:react-a11y-role-has-required-aria-props
    return (
      <label class={this.classes} role="switch" aria-checked={this.checked} tabindex="0">
        <span class="vd-switch_symbol-outer">
          <input
            class="vd-switch_widget"
            type="checkbox"
            aria-hidden="true"
            tabindex="-1"
            id={this.id}
            name={this.name}
            true-value={this.trueValue}
            false-value={this.falseValue}
            checked={this.checked}
            onChange={this.onChange}
          />
          <span class="vd-switch_symbol">
            <span class="vd-switch_symbol-inner" />
          </span>
        </span>
        <span>
          {(this.checked ? this.trueLabel : this.falseLabel) ||
            this.label ||
            this.$slots.default}
        </span>
      </label>
    );
  }
}
