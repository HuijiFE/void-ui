<template>
  <div class="vd-made-tabs"
       :class="classes">
    <div class="tabs-head">
      <div v-for="(item, index) in tabList"
           :key="index"
           @click="select(item, index)"
           class="head-item"
           :class="{active: item.active}">
        <slot-comp :item="item"></slot-comp>
      </div>
      <span v-if="showTipBar"
            class="indicatorBar"
            ref="indicatorBar"></span>
    </div>
    <div class="tabs-body">
      <slot></slot>
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
import VdMadeTabsItem from './VdMadeTabsItem.vue';
import { VdStylableControl } from 'src/controls/base/VdControl';
import anime from 'animejs';

@Component({
  model: {
    prop: 'activeTab',
  },
  components: {
    slotComp: {
      functional: true,
      props: ['item'],
      render(createElement: Function, context) {
        let item = context.props.item;
        if (item.$slots.label) {
          return createElement('div', item.$slots.label);
        } else {
          return createElement(
            'div',
            {
              attrs: {
                class: 'item-inner',
              },
            },
            item.label,
          );
        }
      },
    },
  },
})
export default class VdMadeTabs extends VdStylableControl {
  @Prop({ type: String })
  activeTab: string;

  @Prop({ default: 'top', type: String })
  tabHeadPosition: 'left' | 'right' | 'top' | 'bottom';

  @Prop({ default: true, type: Boolean })
  bordered: boolean;

  @Prop({ default: true, type: Boolean })
  showTipBar: boolean;

  tabList: VdMadeTabsItem[] = [];
  currentTabName: string = this.activeTab;
  activeTabIndex: number;

  get classes() {
    return [
      `theme-${this.theme || this.$void.theme}`,
      `position-${this.tabHeadPosition}`,
      { bordered: this.bordered },
    ];
  }

  mounted() {
    this.initTabs();
    if (this.showTipBar) {
      this.initIndicatorBar();
    }
  }

  initTabs() {
    let children = this.$children.filter(
      item => item.$options.name === 'VdMadeTabsItem',
    ) as VdMadeTabsItem[]; // 这个办法还不是很好

    this.tabList = children;
  }

  initIndicatorBar() {
    this.activeTabIndex = this.tabList.findIndex(item => item.active) || 0;
    this.$nextTick(() => {
      this.moveIndicatorBar();
    });
  }

  select(item: VdMadeTabsItem, index: number) {
    this.currentTabName = item.name;
    this.activeTabIndex = index;
    if (this.showTipBar) {
      this.moveIndicatorBar();
    }

    this.$emit('input', item.name);
    this.$emit('on-select', item.name);
  }

  moveIndicatorBar() {
    let activeItem = this.$el.querySelectorAll('.head-item')[
      this.activeTabIndex
    ] as HTMLElement;

    let indicatorBar = this.$refs.indicatorBar as HTMLElement;

    let animeOptions;
    if (['top', 'bottom'].includes(this.tabHeadPosition)) {
      animeOptions = {
        translateX: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
      };
    } else {
      animeOptions = {
        translateY: activeItem.offsetTop,
        height: activeItem.offsetHeight,
      };
    }
    anime({
      targets: indicatorBar,
      ...animeOptions,
      duration: 300,
      easing: 'linear',
    });
  }
}
</script>
