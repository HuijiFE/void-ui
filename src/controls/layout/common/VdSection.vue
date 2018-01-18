<template>
  <div class="vd-section"
       :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdSection extends VdStylableControl {
  @Prop({ default: true })
  transparent: boolean;

  get classes(): ClassNames {
    return [
      `theme-${this.theme || this.$void.theme}`,
      {
        transparent: this.transparent,
      },
    ];
  }
}
</script>
