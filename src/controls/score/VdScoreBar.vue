<template>
  <div class="vd-score-bar">
    <span class="score-bar-inner"
          :class="grade">
      {{displayValue}}
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
  @Prop({ default: 0, type: Number })
  value: number;

  @Prop({ default: 10, type: Number })
  max: number;

  get displayValue(): string {
    return this.value === this.max ? this.value.toString() : this.value.toFixed(1);
  }
  get grade(): string {
    return `grade-${Math.round(this.value / this.max * 10)}`;
  }
}
</script>
