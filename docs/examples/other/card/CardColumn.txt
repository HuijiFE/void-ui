<template>
  <vd-flexbox gutter="xsmall">
    <vd-flexbox v-for="i in 3"
                :key="i"
                flex="50">
      <vd-card :head="head"
               :direction="'column'"
               class="card-item"
               :image-src="image"
               :image-title="head"
               :image-alt="alt"
               :content="content"
               :description="description">
      </vd-card>
    </vd-flexbox>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VdCardBasic extends Vue {
  head: string = '使用弹性盒子进行高级布局';
  alt: string = '使用弹性盒子进行高级布局';
  content: string = '使用弹性盒子的意义是在任何尺寸的屏幕上改变其和其子元素的尺寸填充屏幕可用空间。';
  image: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVxO8YLjxo4crPogxEwB4_yjzR8XbUKPbCuLYXYf3wFDkCzvQ-tA';
  description: string = '2017-12-22';
}
</script>
<style lang="scss" scoped>
.card-item {
  & + & {
    margin-top: 0.16rem;
  }
}
</style>

