<template>
  <div class="vd-score">
    <div class="score-inner"
         :class="level">
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
  get level(): string {
    return `level-${Math.round(this.value / this.max * 10 - 1)}`;
  }
}
</script>

