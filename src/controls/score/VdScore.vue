<template>
  <div class="vd-score">
    <div class="score-inner"
         :class="grade">
      {{value >= 10 ? value : value.toFixed(1)}}
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
export default class VdScore extends Vue {
  @Prop({ default: 0 })
  value: number;
  @Prop({
    default: 100,
  })
  max: number;
  get grade(): string {
    return `grade-${Math.round(this.value / this.max * 10 - 1)}`;
  }
}
</script>
