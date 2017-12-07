<template>
  <label class="vd-radio"
         :class="classes">
    <span class="radio-outer">
      <span class="radio-inner"></span>
      <input type="radio"
             class="radio-input"
             :value="tag"
             v-model="model"
             :disabled="disabled"
             :checked="checked"
             tabindex="-1">
    </span>
    <span class="radio-content">
      <slot>
        <template v-if="content">{{content}}</template>
        <template v-else>{{content}}</template>
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

@Component
export default class VdRadio extends Vue {
  @Prop() genre: string;

  @Prop([String, Boolean, Number])
  value: string | boolean | number;

  @Prop() tag: string;

  @Prop() checked: boolean;

  @Prop() disabled: boolean;

  @Prop() content: string;

  get classes() {
    return [
      `genre-${this.genre}`,
      {
        checked: this.value === this.tag,
        disabled: this.disabled,
      },
    ];
  }

  get model() {
    return this.value;
  }

  set model(value) {
    this.$emit('input', value);
  }

  check() {
    if (this.model !== this.tag) {
      this.model = this.tag;
    }
  }

  created() {
    if (this.checked) {
      this.check();
    }
  }
}
</script>
