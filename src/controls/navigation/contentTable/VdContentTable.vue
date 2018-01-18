<template>
  <div class="vd-content-table"
       :class="classes">
    <div class="indicator-bar">
      <span ref="indicatorBar"
            class="bar-inner"></span>
    </div>
    <div class="content-body">
      <vd-content-table-item v-for="item in data"
                             :key="item.id"
                             :data="item">
      </vd-content-table-item>
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
import anime from 'animejs';

import { VdStylableControl } from 'src/controls/base/VdControl';
import VdContentTableItem from './VdContentTableItem.vue';
import { ContentTableItem } from './VdContentTable';

const duration = 200;
const easing = 'easeInQuad';

@Component
export default class VdContentTable extends VdStylableControl {
  children: VdContentTableItem[] = [];
  activeChild: VdContentTableItem;

  @Prop() data: ContentTableItem[];

  @Provide() root = this;

  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }

  mounted() {
    this.initChildren(this.$children);

    if (!this.activeChild) {
      this.activeChild = this.children[0];
      this.activeChild.active = true;
    }

    this.initIndicatorBar();
    window.addEventListener('resize', this.initIndicatorBar);
  }

  initChildren(children: Vue[]) {
    let childrenData: VdContentTableItem[] = [];
    let hash = this.$route.hash;

    for (let i = 0; i < children.length; i++) {
      let child = children[i] as VdContentTableItem;

      if (hash && `#${child.data.id}` === hash) {
        child.active = true;
        this.activeChild = child;
      }

      childrenData.push(child);

      if (children[i].$children) {
        this.initChildren(children[i].$children);
      }
    }

    this.children = childrenData;
  }

  initIndicatorBar() {
    let el = this.activeChild.$el.querySelector('.item-label') as HTMLElement;
    anime({
      targets: this.$refs.indicatorBar,
      translateY: el.offsetTop,
      height: el.offsetHeight,
      duration,
      easing,
    });
  }

  itemClick(treeItem: VdContentTableItem, el: HTMLElement) {
    let oldChild = this.activeChild;
    this.activeChild = treeItem;

    anime({
      targets: this.$refs.indicatorBar,
      translateY: el.offsetTop,
      height: el.offsetHeight,
      duration,
      easing,
      begin: () => {
        oldChild.active = false;
        treeItem.active = true;
      },
    });
  }
}
</script>
