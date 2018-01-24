<template>
  <div class="vd-score-rank">
    <span class="score-rank-outer"
          :class="grade">
      <span class="score-rank-img">
        <img :src="src"
             alt="">
      </span>
      <span class="score-rank-inner">{{displayValue}}</span>
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
  @Prop({ default: 0, type: Number })
  value: number;

  @Prop({ default: 10, type: Number })
  max: number;

  @Prop({ type: String })
  src: string;

  get displayValue(): string {
    return this.value === this.max ? this.value.toString() : this.value.toFixed(1);
  }
  get grade() {
    return `grade-${Math.round(this.value / this.max * 10)}`;
  }
}
</script>
