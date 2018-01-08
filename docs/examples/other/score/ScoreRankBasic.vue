<template>
  <div>
    <vd-score-rank v-for="(item,index) in src.length"
                   :key="item"
                   :value="max + max / 10 - (index + 1) * max / 10"
                   :max="max"
                   :src="src[index]">
    </vd-score-rank>
  </div>
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
export default class ScoreRankBasic extends Vue {
  max = 10;
  src = ['', '', '', '', '', '', '', '', '', '', ''];
}
</script>
