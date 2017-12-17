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
           :value="value"
           v-model="model"
           :disabled="disabled"
           tabindex="-1" />

    <span class="radio-outer">
      <span class="radio-border"></span>
      <span class="radio-inner"></span>
    </span>

    <span v-if="hasLabel"
          class="radio-label">
      <slot>
        {{label}}
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
import { RadioValue, RadioValueSource } from 'src/controls/form/VdFormControl';

@Component({
  model: {
    prop: 'valueSource',
    event: 'change',
  },
})
export default class VdRadio extends VdStylableControl {
  @Prop([String, Number])
  value: RadioValue;

  @Prop([String, Number])
  valueSource: RadioValueSource;

  @Prop() label: string;

  private get model(): RadioValueSource {
    return this.valueSource;
  }
  private set model(newValue: RadioValueSource) {
    this.$emit('change', newValue);
    this.$emit('check', newValue);
  }

  get isChecked(): boolean {
    return this.value === this.valueSource;
  }

  get hasLabel(): boolean {
    return !!this.label || !!this.$slots.default;
  }

  get classes(): ClassNames {
    return [
      `genre-${this.genre || this.$void.genre}`,
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
