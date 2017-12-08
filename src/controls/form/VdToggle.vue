<template>
  <label class="vd-toggle"
         :class="classes"
         role="switch">
    <input class="toggle-input"
           type="checkbox"
           :disabled="disabled"
           :id="id"
           :name="name"
           :true-value="valueOn"
           :false-value="valueOff"
           v-model="model" />
    <span class="toggle-outer">
      <span class="toggle-middle">
        <span class="toggle-inner"></span>
      </span>
    </span>
    <span v-if="shouldShowContent"
          class="toggle-content">
      {{content}}
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
import { ToggleValue } from 'typings';

@Component({
  model: {
    event: 'change',
  },
})
export default class VdToggle extends VdStylableControl {
  @Prop() id: string;
  @Prop() name: string;

  @Prop({ default: true })
  valueOn: ToggleValue;

  @Prop({ default: false })
  valueOff: ToggleValue;

  @Prop() value: ToggleValue;

  get model(): ToggleValue {
    return this.value;
  }
  set model(newValue: ToggleValue) {
    this.$emit('change', newValue);
  }

  get onned(): boolean {
    return this.value === this.valueOn;
  }

  @Prop() contentOn: string;
  @Prop() contentOff: string;

  get shouldShowContent(): boolean {
    return !!this.contentOn && !!this.contentOff;
  }

  get content(): string {
    return this.onned ? this.contentOn : this.contentOff;
  }

  get classes() {
    return [
      this.genre ? `genre-${this.genre}` : `genre-${this.$void.genre}`,
      `shape-${this.shape}`,
      {
        disabled: this.disabled,
        ['onned']: this.onned,
      },
    ];
  }
}
</script>
