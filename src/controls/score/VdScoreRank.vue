<template>
  <div class="vd-score-rank">
    <span class="vd-score-rank_outer"
          :class="grade">
      <span class="vd-score-rank_image-container">
        <img :src="src"
             alt=""
             class="vd-score-rank_image">
      </span>
      <span class="vd-score-rank_inner">{{value >=10 ? value : value.toFixed(1)}}</span>
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
