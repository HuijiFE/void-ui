<template>
  <div class="vd-tabs">
    <div class="tabs-head">
      <vd-tabs-head-item v-for="(item, index) in children"
                         :key="index"
                         :item="item"
                         :selected-item="selectedItem"
                         @change="select"></vd-tabs-head-item>
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

@Component
export default class VdTabs extends Vue {
  children: VdTabsItem[] = [];

  selectedItem: VdTabsItem;

  get selectedIndex(): number {
    return this.selectedItem.index;
  }

  select(item: VdTabsItem) {
    this.selectedItem = item;
  }

  mountChildren() {
    let count = 0;
    let children = this.$children;
    for (let i = 0; i < children.length; i++) {
      let item = children[i] as VdTabsItem;
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
  }

  mounted() {
    this.mountChildren();
  }
}
</script>
