<template>
  <label class="vd-toggle"
         :class="classes"
         role="toggle">
    <span class="outer"
          :class="contentStatus ? position : ''">
      <input class="vd-input"
             :name="name"
             type="checkbox"
             :value="value"
             @change="toggle"
             :disabled="disabled">
    </span>
    <span v-if="contentStatus"
          class="content">
      <slot name="open"
            v-if="value === trueValue"></slot>
      <slot name="close"
            v-if="value === falseValue"></slot>
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
import { ToggleValue, TogglePosition, ToggleShape } from 'typings/toggle';

@Component
export default class VdToggle extends Vue {
  @Prop({ default: false })
  value: ToggleValue;

  @Prop({ default: true })
  trueValue: ToggleValue;

  @Prop({ default: false })
  falseValue: ToggleValue;

  @Prop({ default: 'lite' })
  genre: String;

  @Prop({ default: 'circle' })
  shape: ToggleShape;

  @Prop({ default: false })
  disabled: Boolean;

  @Prop() name: String;

  @Prop({ default: false })
  contentStatus: Boolean;

  @Prop({ default: 'left' })
  position: TogglePosition;

  private get classes() {
    return [
      `genre-${this.genre}`,
      `shape-${this.shape}`,
      `position-${this.position}`,
      {
        checked: this.value === this.trueValue,
        disabled: this.disabled,
      },
    ];
  }
  toggle() {
    const checked = this.value === this.trueValue ? this.falseValue : this.trueValue;
    this.$emit('input', checked);
  }
}
</script>
