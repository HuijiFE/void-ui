<template>
  <div class="vd-score-bar">
    <span class="score-bar-inner"
          :class="grade">
      {{value >= 10 || value === 0 ? value : value.toFixed(1)}}
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
export default class VdScoreBar extends Vue {
  @Prop({ default: 0 })
  value: number;
  @Prop({ default: 10 })
  max: number;
  get grade(): string {
    return `grade-${Math.round(this.value / this.max * 10)}`;
  }
}
</script>
