<template>
  <div role="tree-content"
       class="vd-tree-contents"
       :class="classes">
    <div class="indicator-bar">
      <span ref="indicatorBar"
            class="bar-inner"></span>
    </div>
    <div class="content-body">
      <vd-tree-contents-item v-for="item in data"
                             :key="item.id"
                             :data="item">
      </vd-tree-contents-item>
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
import VdTreeContentsItem from './VdTreeContentsItem.vue';
import anime from 'animejs';

const duration = 300;
const easing = 'linear';
export interface TreeContentData {
  id: string;
  label: string;
  children?: TreeContentData[];
}

@Component
export default class VdTreeContents extends VdStylableControl {
  children: VdTreeContentsItem[] = [];
  activeChild: VdTreeContentsItem;

  @Prop() data: TreeContentData[];

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
  }

  initChildren(children: Vue[]) {
    let childrenData: VdTreeContentsItem[] = [];
    let hash = this.$route.hash;

    for (let i = 0; i < children.length; i++) {
      let child = children[i] as VdTreeContentsItem;
      child.root = this;

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

  treeItemClick(treeItem: VdTreeContentsItem, el: HTMLElement) {
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


