<template>
  <button class="nav-item theme-switch"
          @click="onClick">
    Switch Theme
  </button>
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
import { VdStylableControl } from 'void-ui';

@Component
export default class ThemeSwitch extends VdStylableControl {
  onClick() {
    if (this.$void.theme === 'lite') {
      this.$void.theme = 'dark';
    } else {
      this.$void.theme = 'lite';
    }
  }
}
</script>
