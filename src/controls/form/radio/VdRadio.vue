<template>
  <label class="vd-radio"
         :class="classes"
         tabindex="0">
    <input type="radio"
           class="radio-input"
           ref="input"
           :value="value"
           v-model="model"
           :disabled="disabled"
           tabindex="-1" />
    <span class="radio-outer">
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
import { VdStylableControl, RadioValue, RadioValueSource } from 'src';

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

  get model(): RadioValueSource {
    return this.valueSource;
  }
  set model(newValue: RadioValueSource) {
    this.$emit('change', newValue);
    this.$emit('check', newValue);
  }

  get checked(): boolean {
    return this.value === this.valueSource;
  }

  @Prop() content: string;

  get hasContent(): boolean {
    return !!this.content || !!this.$slots.default;
  }

  get classes(): ClassNames {
    return [
      `genre-${this.genre}`,
      {
        checked: this.checked,
      },
    ];
  }
}
</script>
