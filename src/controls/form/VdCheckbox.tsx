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
import { Skin, VdControl } from '@void/controls/base/VdControl';
import { FormWidget } from '@void/controls/form/VdForm';

export interface Checkbox extends FormWidget {
  label: string;
  value: string | number;
}

/**
 * Control Checkbox
 */
@Component
export class VdCheckbox extends VdControl implements Checkbox {
  @Prop({ type: String })
  public readonly id!: string;

  @Prop({ type: String })
  public readonly name!: string;

  @Prop({ type: String })
  public readonly label!: string;

  @Prop({ type: [String, Number], required: true })
  public readonly value!: string | number;

  @Model('change', { type: Array, required: true })
  public readonly sourceValue!: (string | number)[];

  public get checked(): boolean {
    return this.sourceValue.includes(this.value);
  }

  public get classes(): ClassName {
    return [
      'vd-checkbox',
      `vdp-theme_${this.$theme}`,
      {
        'is-checked': this.checked,
        'is-disabled': this.disabled,
      },
    ];
  }

  private onChange(): void {
    if (this.checked) {
      const index: number = this.sourceValue.indexOf(this.value);
      this.$emit(
        'change',
        this.sourceValue.slice(0, index).concat(this.sourceValue.slice(index + 1)),
      );
    } else {
      this.$emit('change', this.sourceValue.concat([this.value]));
    }
  }

  private render(h: CreateElement): VNode {
    // tslint:disable:react-a11y-role-has-required-aria-props
    return (
      <label
        class={this.classes}
        role="checkbox"
        aria-checked={this.checked}
        tabindex="0"
      >
        <span class="vd-checkbox_symbol-outer">
          <input
            class="vd-checkbox_widget"
            type="checkbox"
            aria-hidden="true"
            tabindex="-1"
            id={this.id}
            name={this.name}
            value={this.value}
            checked={this.checked}
            onChange={this.onChange}
          />
          <span class="vd-checkbox_symbol">
            <span class="vd-checkbox_symbol-inner" />
            <vd-icon class="vd-checkbox_symbol-check" fa={['fas', 'check']} />
          </span>
        </span>
        <span class="vd-checkbox_label">{this.label || this.$slots.default}</span>
      </label>
    );
  }
}

/**
 * Control CheckboxGroup
 */
@Component
export class VdCheckboxGroup extends VdControl {
  @Prop({ type: String, default: 'widget' })
  public mode!: 'widget' | 'button';

  @Prop({ type: Array, required: true })
  public itemsSource!: Checkbox[];

  @Model('change', { type: Array, required: true })
  public sourceValue!: (string | number)[];

  private onChange(value: (string | number)[]): void {
    this.$emit('change', value);
  }

  private onClick(value: string | number): () => void {
    return () => {
      if (this.sourceValue.includes(value)) {
        const index: number = this.sourceValue.indexOf(value);
        this.$emit(
          'change',
          this.sourceValue.slice(0, index).concat(this.sourceValue.slice(index + 1)),
        );
      } else {
        this.$emit('change', this.sourceValue.concat([value]));
      }
    };
  }

  private render(h: CreateElement): VNode {
    return (
      <div
        class={[
          'vd-checkbox-group',
          {
            'vd-button-group': this.mode === 'button',
          },
        ]}
      >
        {this.mode === 'widget'
          ? this.itemsSource.map(item => (
              <vd-checkbox
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
                  `vdp-skin_${
                    this.sourceValue.includes(item.value) ? Skin.fill : Skin.plain
                  }`,
                  {
                    'is-checked': this.sourceValue.includes(item.value),
                  },
                ]}
                onClick={this.onClick(item.value)}
              >
                {item.label}
              </button>
            ))}
      </div>
    );
  }
}
