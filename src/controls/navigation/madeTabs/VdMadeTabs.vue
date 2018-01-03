<template>
  <div class="vd-made-tabs">
    <slot></slot>
  </div>
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
export default class VdMadeTabs extends Vue {
  mounted() {
    console.log(this.$slots.label);
  }
}
</script>
