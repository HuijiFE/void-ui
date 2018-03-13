<template>
  <vd-flexbox>
    <vd-card v-for="i in 2"
             :key="i"
             :head="head"
             class="card-item"
             :image-source="image"
             :image-title="head"
             :image-alt="alt"
             :content="content"
             :description="description">
    </vd-card>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VdCardBasic extends Vue {
  head: string = '使用弹性盒子进行高级布局';
  alt: string = '使用弹性盒子进行高级布局';
  content: string = '使用弹性盒子的意义是在任何尺寸的屏幕上改变其和其子元素的尺寸填充屏幕可用空间。';
  image: string = 'https://tse3-mm.cn.bing.net/th?id=OIP.mq2raMvUuYWixcraMSo4dwHaEo&w=263&h=164&c=7&o=5&pid=1.7';
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
