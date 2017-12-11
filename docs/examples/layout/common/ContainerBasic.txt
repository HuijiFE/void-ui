<template>
  <div class="example-section">
    <div class="example-nav">
      <div class="example-container">container</div>
    </div>
    <div class="vd-section"
         style="background-color:#666">
      <div class="example-container">container</div>
    </div>
    <div class="vd-section"
         style="background-color:#888">
      <div class="example-container">container</div>
    </div>
    <div class="vd-section"
         style="background-color:#666">
      <div class="example-container">container</div>
    </div>
    <div class="vd-section"
         style="background-color:#888">
      <div class="example-container">container</div>
    </div>
    <div class="example-footer">
      <div class="example-container">container</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContainerBasic extends Vue {}
</script>
