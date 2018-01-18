<template>
  <div class="vd-container"
       :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdContainer extends VdStylableControl {
  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }
}
</script>
