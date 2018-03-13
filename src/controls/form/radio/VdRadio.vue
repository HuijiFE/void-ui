<template>
  <label class="vd-radio"
         :class="classes"
         role="radio"
         :aria-checked="isChecked"
         :aria-disabled="isDisabled"
         tabindex="0"
         @keydown.space.stop.prevent="check"
         @keydown.enter.stop.prevent="check">

    <input class="vd-radio_input"
           type="radio"
           ref="input"
           :id="id"
           :name="name"
           :value="value"
           v-model="model"
           :disabled="disabled"
           tabindex="-1" />

    <span class="vd-radio_outer">
      <span class="vd-radio_border"></span>
      <span class="vd-radio_inner"></span>
    </span>

    <span v-if="hasContent"
          class="vd-radio_content">
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
import { findParentComponent } from 'src/utils/componentUtils';
import { VdStylableControl } from 'src/controls/base/VdControl';
import { RadioValue } from 'src/controls/form/VdFormControl';
import VdRadioGroup from 'src/controls/form/radio/VdRadioGroup.vue';

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

  parent: VdRadioGroup | undefined;

  private get model(): RadioValue {
    return this.parent ? this.parent.valueSource : this.valueSource;
  }

  private set model(newValue: RadioValue) {
    this.$emit('check', newValue);
    if (this.parent) {
      this.parent.$emit('change', newValue);
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
    let theme = this.parent ? this.parent.theme : this.theme;
    let tone = this.parent ? this.parent.tone : this.tone;
    let size = this.parent ? this.parent.size : this.size;

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

  beforeMount() {
    this.parent = findParentComponent(this, VdRadioGroup);
  }
}
</script>
