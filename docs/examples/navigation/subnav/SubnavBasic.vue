<template>
  <vd-flexbox>
    <vd-subnav>
      <vd-subnav-item>标题一</vd-subnav-item>
      <vd-subnav-item>标题二</vd-subnav-item>
      <vd-subnav-item>标题三</vd-subnav-item>
      <vd-subnav-item>标题四</vd-subnav-item>
      <vd-subnav-item>标题五</vd-subnav-item>
    </vd-subnav>
  </vd-flexbox>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SubnavBasic extends Vue {}
</script>
