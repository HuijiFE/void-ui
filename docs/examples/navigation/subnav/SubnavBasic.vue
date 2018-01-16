<template>
  <vd-flexbox gutter="auto">
    <vd-flexbox flex="100">
      <vd-subnav v-model="selectedItem">
        <vd-subnav-item value="one">标题一</vd-subnav-item>
        <vd-subnav-item value="two">标题二</vd-subnav-item>
        <vd-subnav-item value="three">标题三</vd-subnav-item>
        <vd-subnav-item value="four">标题四</vd-subnav-item>
        <vd-subnav-item value="five">标题五</vd-subnav-item>
      </vd-subnav>
    </vd-flexbox>
    <vd-flexbox flex="100" justify="center">
      已选择：{{selectedItem}}
    </vd-flexbox>
  </vd-flexbox>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SubnavBasic extends Vue {
  selectedItem = 'two';
}
</script>
