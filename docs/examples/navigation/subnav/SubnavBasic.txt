<template>
  <div>
    <vd-subnav>
      <vd-subnav-item label="标题一"></vd-subnav-item>
      <vd-subnav-item label="标题二"></vd-subnav-item>
      <vd-subnav-item label="标题三"></vd-subnav-item>
      <vd-subnav-item label="标题四"></vd-subnav-item>
      <vd-subnav-item label="标题五"></vd-subnav-item>
    </vd-subnav>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SubnavBasic extends Vue {}
</script>
