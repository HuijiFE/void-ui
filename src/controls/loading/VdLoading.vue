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
  @Prop({ default: false, type: Boolean })
  multiColor: boolean;

  @Prop({ default: false, type: Boolean })
  covered: boolean;

  @Prop({ default: false, type: Boolean })
  gray: boolean;

  get classes(): ClassNames {
    return [
      `theme-${this.theme || this.$void.theme}`,
      `size-${this.size}`,
      {
        'multi-color': this.multiColor,
        covered: this.covered,
        gray: this.gray,
      },
    ];
  }
}
</script>
