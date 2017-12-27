<template>
  <vd-link-list :linkList="linkList"></vd-link-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LinkBasic extends Vue {
  linkList = [
    {
      href: 'https://www.baidu.com',
      icon: 'home',
      label: '百度',
    },
    {
      href: 'https://cn.bing.com',
      icon: 'home',
      label: 'Bing',
    },
  ];
}
</script>

