<template>
  <label class="vd-radio"
         :class="classes"
         role="radio"
         :aria-checked="isChecked"
         :aria-disabled="isDisabled"
         tabindex="0"
         @keydown.space.stop.prevent="check"
         @keydown.enter.stop.prevent="check">

    <input class="radio-input"
           type="radio"
           ref="input"
           :id="id"
           :name="name"
           :value="value"
           v-model="model"
           :disabled="disabled"
           tabindex="-1" />

    <span class="radio-outer">
      <span class="radio-border"></span>
      <span class="radio-inner"></span>
    </span>

    <span v-if="hasContent"
          class="radio-content">
      <slot>
        {{content}}
      </slot>
    </span>

  </label>
</template>

<script lang="ts">
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
import { VdStylableControl } from 'src/controls/base/VdControl';
import { RadioValue } from 'src/controls/form/VdFormControl';
import VdRadioGroup from 'src/controls/form/radio/VdRadioGroup.vue';
import { findParentComponent } from 'src/utils/util';

@Component({
  model: {
    prop: 'valueSource',
    event: 'change',
  },
})
export default class VdRadio extends VdStylableControl {
  @Prop() id: string;
  @Prop() name: string;

  @Prop([String, Number])
  value: RadioValue;

  @Prop([String, Number])
  valueSource: RadioValue;

  @Prop() content: string;

  radioGroup: VdRadioGroup | undefined = findParentComponent<VdRadioGroup>(
    this,
    'VdRadioGroup',
  );

  private get model(): RadioValue {
    return this.radioGroup ? this.radioGroup.valueSource : this.valueSource;
  }

  private set model(newValue: RadioValue) {
    this.$emit('check', newValue);
    if (this.radioGroup) {
      this.radioGroup.$emit('input', newValue);
    } else {
      this.$emit('change', newValue);
    }
  }

  get isChecked(): boolean {
    return this.value === this.model;
  }

  get hasContent(): boolean {
    return !!this.content || !!this.$slots.default;
  }

  get classes(): ClassNames {
    let theme = this.radioGroup ? this.radioGroup.theme : this.theme;
    let tone = this.radioGroup ? this.radioGroup.tone : this.tone;
    let size = this.radioGroup ? this.radioGroup.size : this.size;

    return [
      `theme-${theme || this.$void.theme}`,
      `tone-${tone}`,
      `size-${size}`,
      {
        checked: this.isChecked,
        disabled: this.isDisabled,
      },
    ];
  }

  check(): void {
    (this.$refs.input as HTMLElement).click();
  }
}
</script>
