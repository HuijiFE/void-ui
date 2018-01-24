<template>
  <div class="vd-loading"
       :class="classes">
    <div class="vd-loading_container">
      <span class="vd-loading_bar"></span>
      <span class="vd-loading_bar"></span>
      <span class="vd-loading_bar"></span>
      <span class="vd-loading_bar"></span>
      <span class="vd-loading_bar"></span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdLoading extends VdStylableControl {
  @Prop() multiColor: boolean | '';

  @Prop() covered: boolean | '';

  @Prop() gray: boolean | '';

  get isMultiColor(): boolean {
    return this.multiColor || this.multiColor === '';
  }

  get isCovered(): boolean {
    return this.covered || this.covered === '';
  }
  get isGray(): boolean {
    return this.gray || this.gray === '';
  }
  get classes(): ClassNames {
    return [
      `theme-${this.theme || this.$void.theme}`,
      `size-${this.size}`,
      {
        'multi-color': this.isMultiColor,
        covered: this.isCovered,
        gray: this.isGray,
      },
    ];
  }
}
</script>
