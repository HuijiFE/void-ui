<template>
  <div role="process-bar"
       class="vd-process-bar"
       :class="classes">
    <div class="vd-process-bar_process-outer">
      <div class="vd-process-bar_process-inner"
           :class="innerClasses"
           :style="processStyle"></div>
      <span v-if="showText"
            class="vd-process-bar_process-text">{{value}}%</span>
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
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdProcessBar extends VdStylableControl {
  @Prop({ default: 0 })
  value: number;

  @Prop({ default: false })
  failure: boolean;

  @Prop({ default: true })
  showText: boolean;

  get status(): 'loading' | 'success' | 'failure' {
    return this.failure ? 'failure' : this.value >= 100 ? 'success' : 'loading';
  }

  get classes() {
    return this.theme ? `theme-${this.theme}` : `theme-${this.$void.theme}`;
  }

  get processStyle() {
    return {
      width: `${this.value}%`,
    };
  }

  get innerClasses(): ClassNames {
    return [`status-${this.status}`];
  }
}
</script>
