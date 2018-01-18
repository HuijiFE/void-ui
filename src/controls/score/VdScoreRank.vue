<template>
  <div class="vd-score-rank">
    <span class="score-rank-outer"
          :class="grade">
      <span class="score-rank-img">
        <img :src="src"
             alt="">
      </span>
      <span class="score-rank-inner">{{value >=10 ? value : value.toFixed(1)}}</span>
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
  @Prop() src: string;
  get grade() {
    return `grade-${Math.round(this.value / this.max * 10)}`;
  }
}
</script>
