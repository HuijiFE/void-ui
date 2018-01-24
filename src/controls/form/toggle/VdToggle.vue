<template>
  <label class="vd-toggle"
         :class="classes"
         role="switch"
         :aria-checked="isOnned"
         :aria-disabled="isDisabled"
         tabindex="0"
         @keydown.space.stop.prevent="toggle"
         @keydown.enter.stop.prevent="toggle">

    <input class="toggle-input"
           type="checkbox"
           ref="input"
           :id="id"
           :name="name"
           :false-value="valueOff"
           :true-value="valueOn"
           v-model="model"
           :disabled="disabled"
           tabindex="-1" />

    <span class="toggle-outer">
      <span class="toggle-middle">
        <span class="toggle-inner"></span>
      </span>
    </span>

    <span v-if="hasContent"
          class="toggle-content">
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
  @Prop({ type: String })
  id: string;

  @Prop({ type: String })
  name: string;

  @Prop({ default: false, type: [Boolean, String, Number] })
  valueOff: ToggleValue;

  @Prop({ default: true, type: [Boolean, String, Number] })
  valueOn: ToggleValue;

  @Prop({ type: [Boolean, String, Number] })
  valueSource: ToggleValue;

  @Prop({ type: String })
  contentOff: string;

  @Prop({ type: String })
  contentOn: string;

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
