<template>
  <div>
    <vd-tabs>
      <vd-tabs-item label="a"
                    :selected="true">日照香炉生紫烟，遥看瀑布挂前川。 飞流直下三千尺，疑是银河落九天。
      </vd-tabs-item>
      <vd-tabs-item label="b">朝辞白帝彩云间，千里江陵一日还。 两岸猿声啼不住，轻舟已过万重山。
      </vd-tabs-item>
      <vd-tabs-item label="c">李白乘舟将欲行，忽闻岸上踏歌声。 桃花潭水深千尺，不及汪伦送我情。
      </vd-tabs-item>
      <vd-tabs-item label="d">故人西辞黄鹤楼，烟花三月下扬州。 孤帆远影碧空尽，唯见长江天际流。
      </vd-tabs-item>
      <vd-tabs-item label="e">危楼高百尺，手可摘星辰。 不敢高声语，恐惊天上人。
      </vd-tabs-item>
    </vd-tabs>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';

@Component
export default class TabsBasci extends Vue {}
</script>
