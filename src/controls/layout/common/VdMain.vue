<template>
  <main class="vd-main"
        :class="classes">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdMain extends VdStylableControl {
  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }
}
</script>
