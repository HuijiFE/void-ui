<template>
  <vd-nav-tabs default-active="a"
               @on-select="select">
    <vd-nav-tab-item index="a">系列热销</vd-nav-tab-item>
    <vd-nav-tab-item index="b">折扣推荐</vd-nav-tab-item>
    <vd-nav-tab-item index="c">随便什么</vd-nav-tab-item>
  </vd-nav-tabs>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VdNavTabsBasic extends Vue {
  select(index: string) {
    console.log(index);
  }
}
</script>

