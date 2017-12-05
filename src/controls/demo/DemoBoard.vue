<template>
  <div class="vd-demo-board"
       :class="classes">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Emit,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from 'vue-property-decorator';
import highlight from 'highlight.js';
@Component
export default class DemoBoard extends Vue {
  @Prop() genre: string;
  private get classes() {
    return [`genre-${this.genre}`];
  }
}
</script>

