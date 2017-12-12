<template>
  <div class="vd-score-rank">
    <span class="score-rank-outer">
      <img src="src"
           alt="">
      <span class="score-rank-inner">{{value}}</span>
    </span>
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
export default class VdScoreRank extends Vue {
  @Prop({ default: 0 })
  value: number;
  @Prop({ default: 10 })
  max: number;
  level() {
    return `level-${this.value / this.max * 10}`;
  }
}
</script>
