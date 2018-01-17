<template>
  <div class="vd-tag-wrapper">
    <slot></slot>
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

@Component
export default class VdTagWrapper extends Vue {}
</script>
