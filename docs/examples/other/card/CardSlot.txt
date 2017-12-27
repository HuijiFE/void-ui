<template>
  <vd-flexbox>
    <vd-card v-for="i in 2"
             :key="i"
             class="card-item"
             :image-source="image"
             :image-title="head"
             :image-alt="alt"
             :description="description">
      <div slot="head">
        这是自定义头部标题
      </div>
      <div slot="content">
        这是自定义内容 这是自定义内容 这是自定义内容 这是自定义内容 这是自定义内容
      </div>
      <div slot="card-control">
        <vd-button>关注</vd-button>
        <vd-button>点赞</vd-button>
      </div>
      自定义其他内容
    </vd-card>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VdCardSlot extends Vue {
  head: string = '使用弹性盒子进行高级布局';
  alt: string = '使用弹性盒子进行高级布局';
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


