<template>
  <div class="vd-made-tabs">
    <div class="tabs-head">
      <div v-for="(item, index) in tabList"
           :key="index"
           @click="select(item)"
           :class="{active: item.active}">
        {{item.label}}
      </div>
    </div>
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
import VdMadeTabsItem from './VdMadeTabsItem.vue';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component({
  model: {
    prop: 'activeTab',
  },
})
export default class VdMadeTabs extends VdStylableControl {
  @Prop() activeTab: string;

  @Prop({ default: 'horizontal' })
  mode: 'vertical' | 'horizontal';

  tabList: VdMadeTabsItem[] = [];

  currentTabName: string = this.activeTab;

  get classes() {
    return [`theme-${this.theme || this.$void.theme}`, `mode-${this.mode}`];
  }

  mounted() {
    this.initTabs();
  }

  initTabs() {
    let children = this.$children.filter(
      item => item.$options.name === 'VdMadeTabsItem',
    ) as VdMadeTabsItem[]; // 这个办法还不是很好

    this.tabList = children;
  }

  select(item: VdMadeTabsItem) {
    this.currentTabName = item.name;
    this.$emit('input', item.name);
    this.$emit('on-select', item.name);
  }

  @Watch('currentTabName')
  onCurrentTabNameChange(val: string, oldVal: string) {
    console.log(val, oldVal);
  }
}
</script>
