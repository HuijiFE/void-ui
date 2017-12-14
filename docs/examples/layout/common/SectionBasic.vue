<template>
  <div class="example-section">
    <div class="example-nav">main-nav</div>
    <div class="vd-section"
         style="background-color:#666">section</div>
    <div class="vd-section"
         style="background-color:#888">section</div>
    <div class="vd-section"
         style="background-color:#666">section</div>
    <div class="vd-section"
         style="background-color:#888">section</div>
    <div class="example-footer">footer</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SectionBasic extends Vue {}
</script>
