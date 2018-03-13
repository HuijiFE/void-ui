<template>
  <label class="vd-toggle"
         :class="classes"
         role="switch"
         :aria-checked="isOnned"
         :aria-disabled="isDisabled"
         tabindex="0"
         @keydown.space.stop.prevent="toggle"
         @keydown.enter.stop.prevent="toggle">

    <input class="vd-toggle_input"
           type="checkbox"
           ref="input"
           :id="id"
           :name="name"
           :false-value="valueOff"
           :true-value="valueOn"
           v-model="model"
           :disabled="disabled"
           tabindex="-1" />

    <span class="vd-toggle_outer">
      <span class="vd-toggle_middle">
        <span class="vd-toggle_inner"></span>
      </span>
    </span>

    <span v-if="hasContent"
          class="vd-toggle_content">
      <slot v-if="isOnned"
            name="contentOn">
        {{contentOn}}
      </slot>
      <slot v-else
            name="contentOff">
        {{contentOff}}
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
import { ToggleValue } from 'src/controls/form/VdFormControl';

@Component({
  model: {
    prop: 'valueSource',
    event: 'change',
  },
})
export default class VdToggle extends VdStylableControl {
  @Prop() id: string;
  @Prop() name: string;

  @Prop({ default: false })
  valueOff: ToggleValue;
  @Prop({ default: true })
  valueOn: ToggleValue;

  @Prop() valueSource: ToggleValue;

  @Prop() contentOff: string;
  @Prop() contentOn: string;

  private get model(): ToggleValue {
    return this.valueSource;
  }
  private set model(newValue: ToggleValue) {
    this.$emit('change', newValue);
  }

  get isOnned(): boolean {
    return this.valueOn === this.valueSource;
  }

  get hasContent(): boolean {
    return (
      (!!this.contentOn && !!this.contentOff) ||
      (!!this.$slots.contentOn && !!this.$slots.contentOff)
    );
  }

  get classes() {
    return [
      `theme-${this.theme || this.$void.theme}`,
      `shape-${this.shape}`,
      {
        disabled: this.isDisabled,
        onned: this.isOnned,
      },
    ];
  }

  toggle(): void {
    (this.$refs.input as HTMLElement).click();
  }
}
</script>
