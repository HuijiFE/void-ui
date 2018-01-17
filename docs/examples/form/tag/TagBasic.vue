<template>
  <div class="tag-basic">
    <vd-tag-wrapper>
      <vd-tag :skin="skin" :size="size">标签一</vd-tag>
      <vd-tag :skin="skin" :size="size">标签二</vd-tag>
      <vd-tag :skin="skin" :size="size">标签三</vd-tag>
    </vd-tag-wrapper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TagBasic extends Vue {
  skin = 'plain';
  size = 'medium';
}
</script>
