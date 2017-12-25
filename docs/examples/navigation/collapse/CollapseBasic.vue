<template>
  <vd-collapse @change="collapseChange"
               :source="source"></vd-collapse>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from 'vue-property-decorator';

@Component
export default class VdCollapseBasic extends Vue {
  source = [
    {
      head: '标题一',
      content:
        '一大段内容文字，好多好多内容文字，NCSOFT是一家韩国电子游戏开发商，发行过《天堂》《英雄城市》、《荒野星球》、《激战》、《永恒纪元》和《剑灵》等。',
    },
    {
      head: '标题一',
      content:
        '一大段内容文字，好多好多内容文字，NCSOFT是一家韩国电子游戏开发商，发行过《天堂》《英雄城市》、《荒野星球》、《激战》、《永恒纪元》和《剑灵》等。',
    },
    {
      head: '标题一',
      content:
        '一大段内容文字，好多好多内容文字，NCSOFT是一家韩国电子游戏开发商，发行过《天堂》《英雄城市》、《荒野星球》、《激战》、《永恒纪元》和《剑灵》等。',
    },
    {
      head: '标题一',
      content:
        '一大段内容文字，好多好多内容文字，NCSOFT是一家韩国电子游戏开发商，发行过《天堂》《英雄城市》、《荒野星球》、《激战》、《永恒纪元》和《剑灵》等。',
    },
  ];

  collapseChange() {
    console.log('');
  }
}
</script>


