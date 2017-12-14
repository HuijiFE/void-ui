<template>
  <div class="vd-score-selector"
       :class="classes">
    <span class="score-selector-inner"
          v-for="(item,index) in 10"
          :key="item"
          @click="isActive(index)"
          :class="[index <= current?`level-${current}`:`origin-${current}`]">
    </span>
    <span class="score-selector-content">
      <span :class="`font-${current}`">{{current + 1}}</span>/10
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
export default class VdScoreSelector extends Vue {
  @Prop({ default: 0 })
  value: number;

  @Prop({ default: 'large' })
  size: string;

  current = -1;

  get classes() {
    return [`score-selector-${this.size}`];
  }
  isActive(index: number) {
    return (this.current = index);
  }
}
</script>
