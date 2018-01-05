<template>
  <div class="vd-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VdContainer extends Vue {}
</script>
