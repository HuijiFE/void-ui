<template>
  <div class="vd-tabs"
       :class="classes">
    <div class="tabs-head">
      <button v-for="(item, index) in children"
              :key="index"
              class="head-item"
              :class="{'selected': item.status === 'selected'}"
              @click="select(item)">{{item.label}}</button>
      <span ref="underline"
            class="head-underline"></span>
    </div>
    <div class="tabs-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { VdStylableControl } from 'src/controls/base/VdControl';
import { ControlSkin } from 'typings';
import VdTabsHeadItem from './VdTabsHeadItem.vue';
import VdTabsItem from './VdTabsItem.vue';
import anime from 'animejs';

/** linear
 * easeInQuad easeInCubic easeInQuart easeInQuint easeInSine easeInExpo easeInCirc easeInBack
 * easeOutQuad easeOutCubic easeOutQuart easeOutQuint easeOutSine easeOutExpo easeOutCirc easeOutBack
 * easeInOutQuad easeInOutCubic easeInOutQuart easeInOutQuint easeInOutSine easeInOutExpo easeInOutCirc easeInOutBack
 */
const easing = 'easeInQuad';
const duration = 320;
const opacityOut = [{ value: 1 }, { value: 0 }];
const opacityIn = [{ value: 0 }, { value: 1 }];

@Component
export default class VdTabs extends VdStylableControl {
  @Prop({ default: 'silk' })
  skin: ControlSkin;

  @Prop({ default: true })
  bordered: boolean;

  @Prop({ default: false })
  raised: boolean;

  get classes(): ClassNames {
    return [
      `theme-${this.theme || this.$void.theme}`,
      `skin-${this.skin}`,
      { bordered: this.bordered },
      { raised: this.raised },
    ];
  }

  children: VdTabsItem[] = [];

  selectedItem: VdTabsItem;

  get selectedIndex(): number {
    return this.selectedItem.index;
  }

  select(newItem: VdTabsItem) {
    if (this.selectedItem === newItem) {
      return;
    }

    let oldItem = this.selectedItem;
    this.selectedItem = newItem;

    let timeline = anime.timeline();
    timeline
      .add({
        targets: oldItem.$el,
        opacity: 0,
        duration: 0,
        complete: () => {
          oldItem.status = 'hidden';
        },
      })
      .add({
        targets: newItem.$el,
        translateX:
          newItem.index < oldItem.index
            ? [{ value: -20 }, { value: 0 }]
            : [{ value: 20 }, { value: 0 }],
        opacity: opacityIn,
        easing,
        duration,
        begin: () => {
          newItem.status = 'selected';
        },
      });
    this.moveUnderline();
  }

  moveUnderline() {
    let curHeadItem = this.$el.querySelectorAll('.head-item')[
      this.selectedItem.index
    ] as HTMLElement;
    anime({
      targets: this.$refs.underline,
      left: curHeadItem.offsetLeft,
      width: curHeadItem.offsetWidth,
      easing,
      duration,
    });
  }

  mountChildren() {
    let children: VdTabsItem[] = [];
    let selectedItem: VdTabsItem | null = null;

    for (let i = 0; i < this.$children.length; i++) {
      let item = this.$children[i] as VdTabsItem;
      if (item) {
        item.parent = this;
        item.index = children.push(item) - 1;
        if (item.selected) {
          selectedItem = item;
        }
      }
    }
    if (!selectedItem) {
      selectedItem = children[0];
    }

    this.children = children;
    this.selectedItem = selectedItem;

    let timeline = anime.timeline();
    timeline
      .add({
        targets: children.map(child => child.$el),
        opacity: 0,
        duration: 0,
      })
      .add({
        targets: this.selectedItem.$el,
        translateX: [{ value: 20 }, { value: 0 }],
        opacity: opacityIn,
        easing,
        duration,
        begin: () => {
          this.selectedItem.status = 'selected';
        },
        complete: () => this.moveUnderline(),
      });
  }

  mounted() {
    this.mountChildren();
  }
}
</script>
