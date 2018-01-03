<template>
  <div class="vd-nav-tabs"
       :class="classes">
    <slot></slot>
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
import VdNavTabsItem from './VdNavTabsItem.vue';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdNavTabs extends VdStylableControl {
  @Prop() defaultActive: string;

  @Prop({ default: 'horizontal' })
  mode: 'vertical' | 'horizontal';

  activeIndex: string = this.defaultActive;

  get classes() {
    return [`theme-${this.theme || this.$void.theme}`, `mode-${this.mode}`];
  }

  select(item: any) {
    this.activeIndex = item.index;
    this.$emit('on-select', item.index);
  }
}
</script>


