<template>
  <div class="vd-acrylic">
    <div class="vd-acrylic_background"
         :style="backgroundStyle"></div>
    <div class="vd-acrylic_cover"></div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdAcrylic extends VdStylableControl {
  @Prop() backgroundImage: string;

  get backgroundStyle() {
    return {
      backgroundImage: `url("${this.backgroundImage}")`,
    };
  }

  // get classes(): ClassNames {
  //   return [`theme-${this.theme || this.$void.theme}`];
  // }
}
</script>
