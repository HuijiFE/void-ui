<template>
  <vd-flexbox gutter="xsmall">
    <vd-link v-for="i in 2"
             :key="i"
             href="http://www.baidu.com"
             label="百度百度"
             icon="home"></vd-link>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LinkBasic extends Vue {}
</script>

