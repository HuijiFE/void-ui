<template>
  <div class="vd-tabs">
    <div class="tabs-head">
      <button class="head-item"
              v-for="(item, index) in children"
              :key="index"
              @click="select(item)">{{item.label}}</button>
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
import VdTabsHeadItem from './VdTabsHeadItem.vue';
import VdTabsItem from './VdTabsItem.vue';
import anime from 'animejs';

/** linear
 * easeInQuad easeInCubic easeInQuart easeInQuint easeInSine easeInExpo easeInCirc easeInBack
 * easeOutQuad easeOutCubic easeOutQuart easeOutQuint easeOutSine easeOutExpo easeOutCirc easeOutBack
 * easeInOutQuad easeInOutCubic easeInOutQuart easeInOutQuint easeInOutSine easeInOutExpo easeInOutCirc easeInOutBack
 */
const easing = 'easeInOutQuint';
const duration = 500;
const opacityOut = [{ value: 1 }, { value: 0.65 }, { value: 0 }];
const opacityIn = [{ value: 0 }, { value: 0.45 }, { value: 1 }];

@Component
export default class VdTabs extends Vue {
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
        translateX:
          newItem.index < oldItem.index
            ? [{ value: 0 }, { value: 100 }]
            : [{ value: 0 }, { value: -100 }],
        opacity: opacityOut,
        easing,
        duration,
        complete: () => {
          oldItem.status = 'hidden';
        },
      })
      .add({
        targets: newItem.$el,
        translateX:
          newItem.index < oldItem.index
            ? [{ value: -100 }, { value: 0 }]
            : [{ value: 100 }, { value: 0 }],
        opacity: opacityIn,
        easing,
        duration,
        begin: () => {
          newItem.status = 'selected';
        },
      });
  }

  mountChildren() {
    let count = 0;
    for (let i = 0; i < this.$children.length; i++) {
      let item = this.$children[i] as VdTabsItem;
      if (item) {
        item.parent = this;
        item.index = this.children.push(item) - 1;
        if (item.selected) {
          this.selectedItem = item;
        }
      }
    }
    if (!this.selectedItem) {
      this.selectedItem = this.children[0];
    }
    let timeline = anime.timeline();
    timeline
      .add({
        targets: this.children.map(child => child.$el),
        translateX: '100%',
        opacity: 0,
        duration: 0,
      })
      .add({
        targets: this.selectedItem.$el,
        translateX: [{ value: 100 }, { value: 0 }],
        opacity: opacityIn,
        easing,
        duration,
        begin: () => {
          this.selectedItem.status = 'selected';
        },
      });
  }

  mounted() {
    this.mountChildren();
  }
}
</script>
