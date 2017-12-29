<template>
  <vd-tree-contents :data="data"></vd-tree-contents>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TreeContentBasic extends Vue {
  data = [
    {
      label: '历史',
      id: 'head1',
      children: [
        {
          label: '收购',
          id: 'head2',
          children: [
            {
              label: '主要游戏发行历史',
              id: 'head3',
            },
            {
              label: '魔兽争霸系列',
              id: 'head4',
            },
            {
              label: '暗黑破坏神系列',
              id: 'head5',
            },
            {
              label: '星际争霸系列',
              id: 'head6',
            },
          ],
        },
      ],
    },
    {
      label: '暴雪战网',
      id: 'head7',
      children: [
        {
          label: '更名',
          id: 'head8',
        },
      ],
    },
  ];
}
</script>

