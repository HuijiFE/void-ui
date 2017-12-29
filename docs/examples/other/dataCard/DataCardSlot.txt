<template>
  <vd-flexbox gutter="large">
    <vd-data-card icon="home">
      <vd-data-card-item label="拥有者"
                         data="1,384,707"
                         data-sup="+35,045">
      </vd-data-card-item>
      <vd-data-card-item label="玩过"
                         data="1,234,074">
        <span slot="data-sup">-35,264</span>
        <div>超过80%的玩家</div>
      </vd-data-card-item>

    </vd-data-card>
    <vd-data-card icon="home">
      <vd-data-card-item label="我对该游戏的评分">
        <vd-score-selector slot="item-data"
                           size='large'></vd-score-selector>
        <div>评分权重1.2</div>
      </vd-data-card-item>
    </vd-data-card>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VdDaraCardBasic extends Vue {}
</script>

