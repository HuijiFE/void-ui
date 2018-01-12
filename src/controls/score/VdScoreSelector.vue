<template>
  <div class="vd-score-selector"
       :class="classes">
    <span class="score-selector-inner"
          v-for="item in 10"
          :key="item"
          @click="isActive(item)"
          :class="[item <= value ? '' : `unselected`,`level-${value - 1}`]">
    </span>
    <span class="score-selector-content">
      <span :class="`font-${value - 1}`">{{value}}</span>/10
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
import {
  VdStylableControl,
  ControlTheme,
  ControlSize,
} from 'src/controls/base/VdControl';
@Component
export default class VdScoreSelector extends VdStylableControl {
  @Prop() value: number;

  get classes() {
    return [`theme-${this.theme || this.$void.theme}`, `size-${this.size}`];
  }

  isActive(item: number) {
    this.$emit('input', item);
  }
}
</script>
