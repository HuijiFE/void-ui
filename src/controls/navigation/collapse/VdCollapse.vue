<template>
  <div class="vd-collapse"
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
import anime from 'animejs';
import VdCollapseItem from './VdCollapseItem.vue';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdCollapse extends VdStylableControl {
  selectedItem: VdCollapseItem;

  @Prop({ default: true, type: Boolean })
  accordion: boolean;

  get classes() {
    return `theme-${this.theme || this.$void.theme}`;
  }

  mounted() {
    this.initState();
  }

  initState() {
    let children: VdCollapseItem[] = [];
    for (let i = 0; i < this.$children.length; i++) {
      let item = this.$children[i] as VdCollapseItem;
      item.parent = this;
      children.push(item);
    }

    this.selectedItem = children.find(i => i.expand) as VdCollapseItem;
    this.selectedItem.status = 'show';
  }

  select(newItem: VdCollapseItem) {
    if (!this.selectedItem) {
      this.selectedItem = newItem;
    }
    let oldItem = this.selectedItem;
    const oldItemBody = this.selectedItem.$el.querySelector('.item-body') as HTMLElement;
    const bodyContent = newItem.$el.querySelector(
      '.item-body .body-content',
    ) as HTMLElement;

    let timeline = anime.timeline();
    const animeOptions = {
      duration: 300,
      easing: 'linear',
      offset: 0,
    };

    let ItemAnime = () => {
      return timeline
        .add({
          targets: newItem.$el.querySelector('.item-body'),
          height: newItem.status === 'show' ? 0 : bodyContent.offsetHeight,
          ...animeOptions,
          complete: () => {
            newItem.status = newItem.status === 'show' ? 'hidden' : 'show';
          },
        })
        .add({
          targets: newItem.$el.querySelector('.head-arrow'),
          rotate: newItem.status === 'show' ? 0 : '-90',
          ...animeOptions,
        });
    };

    if (this.accordion && this.selectedItem !== newItem) {
      ItemAnime()
        .add({
          targets: oldItemBody,
          height: 0,
          ...animeOptions,
          complete: () => {
            oldItem.status = 'hidden';
          },
        })
        .add({
          targets: oldItem.$el.querySelector('.head-arrow'),
          rotate: 0,
          ...animeOptions,
        });
    } else {
      ItemAnime();
    }

    this.selectedItem = newItem;
  }
}
</script>
