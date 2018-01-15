<template>
  <div class="vd-subnav"
       :class="classes"
       role="tablist">
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
import { VdStylableControl } from 'src/controls/base/VdControl';
import VdSubnavItem from './VdSubnavItem.vue';
import { SubnavItem } from './VdSubnav';

@Component({
  model: {
    prop: 'valueSource',
    event: 'change',
  },
})
export default class VdSubnav extends VdStylableControl {
  @Prop() itemsSource: SubnavItem[] = [];

  selectedItem: VdSubnavItem;

  select(newItem: VdSubnavItem) {
    if (this.selectedItem === newItem) {
      return;
    }
    let oldItem = this.selectedItem;
    this.selectedItem = newItem;
    oldItem.status = 'hidden';
    newItem.status = 'selected';
    this.$emit('change', newItem.index);
  }

  mountItems() {
    let itemsSource: VdSubnavItem[] = [];
    let selectedItem: VdSubnavItem | null = null;

    for (let i = 0; i < this.$children.length; i++) {
      let item = this.$children[i] as VdSubnavItem;
      if (item) {
        item.parent = this;
        item.index = itemsSource.push(item) - 1;
        if (item.selected) {
          selectedItem = item;
        }
      }
    }
    if (!selectedItem) {
      selectedItem = itemsSource[0];
    }
    // this.itemsSource = itemsSource;
    this.selectedItem = selectedItem;
    this.selectedItem.status = 'selected';
  }

  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }

  mounted() {
    this.mountItems();
  }
}
</script>
