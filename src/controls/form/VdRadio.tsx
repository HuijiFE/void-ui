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
import { Theme, Tone, Skin, Shape, Size, VdControl } from '@void/controls/base/VdControl';
import { FormWidget } from '@void/controls/form/VdForm';

export interface Radio extends FormWidget {
  label: string;
  value: string | number;
}

/**
 * Control Radio
 */
@Component
export class VdRadio extends VdControl implements Radio {
  @Prop({ type: String })
  public readonly id!: string;

  @Prop({ type: String })
  public readonly name!: string;

  @Prop({ type: String })
  public readonly label!: string;

  @Prop({ type: [String, Number], required: true })
  public readonly value!: string | number;

  @Model('change', { type: [String, Number], required: true })
  public readonly sourceValue!: string | number;

  public get checked(): boolean {
    return this.value === this.sourceValue;
  }

  private onChange(): void {
    this.$emit('change', this.value);
  }

  public get classes(): ClassName {
    return [
      'vd-radio',
      `vdp-theme_${this.$theme}`,
      {
        'is-checked': this.checked,
        'is-disabled': this.disabled,
      },
    ];
  }

  private render(h: CreateElement): VNode {
    // tslint:disable:react-a11y-role-has-required-aria-props
    return (
      <label class={this.classes} role="radio" aria-checked={this.checked} tabindex="0">
        <span class="vd-radio_symbol">
          <input
            class="vd-radio_widget"
            type="radio"
            aria-hidden="true"
            tabindex="-1"
            id={this.id}
            name={this.name}
            value={this.value}
            checked={this.checked}
            onChange={this.onChange}
          />
          <span class="vd-radio_symbol-inner" />
        </span>
        <span class="vd-radio_label">{this.label || this.$slots.default}</span>
      </label>
    );
  }
}

/**
 * Control RadioGroup
 */
@Component
export class VdRadioGroup extends VdControl {
  @Prop({ type: String, default: 'widget' })
  public mode!: 'widget' | 'button';

  @Prop({ type: Array, required: true })
  public itemsSource!: Radio[];

  @Model('change', { type: [String, Number], required: true })
  public sourceValue!: string | number;

  private onChange(value: string | number): void {
    this.$emit('change', value);
  }

  private render(h: CreateElement): VNode {
    return (
      <div
        class={[
          'vd-radio-group',
          {
            'vd-button-group': this.mode === 'button',
          },
        ]}
      >
        {this.mode === 'widget'
          ? this.itemsSource.map(item => (
              <vd-radio
                id={item.id}
                name={item.name}
                label={item.label}
                value={item.value}
                sourceValue={this.sourceValue}
                onChange={this.onChange}
              />
            ))
          : this.itemsSource.map(item => (
              <button
                class={[
                  'vd-radio-group_item',
                  'vd-button',
                  `vdp-theme_${this.$theme}`,
                  `vdp-tone_${this.tone}`,
                  `vdp-size_${this.size}`,
                  `vdp-shape_${this.shape}`,
                  `vdp-skin_${item.value === this.sourceValue ? Skin.fill : Skin.plain}`,
                  {
                    'is-checked': item.value === this.sourceValue,
                  },
                ]}
                role="radio"
                aria-checked={item.value === this.sourceValue}
                onClick={() => this.onChange(item.value)}
              >
                {item.label}
              </button>
            ))}
      </div>
    );
  }
}
