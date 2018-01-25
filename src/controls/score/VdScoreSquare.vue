<template>
  <div class="vd-score-square">
    <div class="score-square-inner"
         :class="grade">
      {{displayValue}}
    </div>
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
export default class VdScoreSquare extends Vue {
  @Prop({ default: 0, type: Number })
  value: number;

  @Prop({ default: 100, type: Number })
  max: number;

  get displayValue(): string {
    return this.value === this.max ? this.value.toString() : this.value.toFixed(1);
  }

  get grade(): string {
    return `grade-${Math.round(this.value / this.max * 10 - 1)}`;
  }
}
</script>
