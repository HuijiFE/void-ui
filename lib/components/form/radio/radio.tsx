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

export interface RadioData {
  label: string;
  value: string | number;
}

/**
 * Component: Radio
 */
@Component({
  mixins: [mixinFormComponent],
})
export class VdRadio extends Vue implements ThemeComponent, FormComponent {
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

  @Model('change', { type: [String, Number], required: true })
  public readonly model!: string | number;

  @Prop({ type: [String, Number], required: true })
  public readonly value!: string | number;

  @Prop({ type: String })
  public readonly label?: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  public get checked(): boolean {
    return this.value === this.model;
  }

  private onChange(event: Event): void {
    this.$emit('change', this.value);
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
        staticClass="vd-radio"
        class={this.classes}
        role="radio"
        aria-checked={this.checked}
        tabindex={this.disabled ? -1 : 0}
      >
        <input
          staticClass="vd-radio_implicit"
          type="radio"
          id={this.id}
          name={this.name}
          value={this.value}
          checked={this.checked}
          onChange={this.onChange}
          aria-hidden="true"
          tabindex="-1"
        />
        <span staticClass="vd-radio_symbol" />
        <span staticClass="vd-radio_label">{this.$slots.default || this.label}</span>
      </label>
    );
  }
}

/**
 * Component: RadioGroup
 */
@Component
export class VdRadioGroup extends Vue implements FormComponent {
  @Model('change', { type: [String, Number], required: true })
  public readonly model!: string | number;

  @Prop({ type: Array, required: true })
  public readonly itemsSource!: RadioData[];

  @Prop({ type: String })
  public readonly direction?: Direction;

  public get classes(): ClassName {
    return [
      {
        [`vdp-direction_${this.direction}`]: this.direction,
      },
    ];
  }

  private onChange(value: string | number): void {
    this.$emit('change', value);
  }

  private render(h: CreateElement): VNode {
    return (
      <div staticClass="vd-radio-group" class={this.classes}>
        {this.itemsSource.map(item => (
          <vd-radio
            model={this.model}
            label={item.label}
            value={item.value}
            onChange={this.onChange}
          />
        ))}
      </div>
    );
  }
}
