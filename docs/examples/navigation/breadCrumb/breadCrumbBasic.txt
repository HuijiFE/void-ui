<template>
  <vd-flexbox>
    <vd-bread-crumb :itemsSource="itemsSource"></vd-bread-crumb>
  </vd-flexbox>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BreadCrumbBasic extends Vue {
  itemsSource = [
    {
      to: '/zh-CN',
      label: '首页',
    },
    {
      to: '/zh-CN/documentation',
      label: '文档',
    },
    {
      to: '/zh-CN/documentation/breadCurmb',
      label: '面包屑',
    },
  ];
}
</script>
