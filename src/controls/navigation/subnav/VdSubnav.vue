<template>
  <div class="vd-subnav"
       :class="classes"
       role="tablist">
    <slot></slot>
    <vd-subnav-item v-for="(item, index) in itemsSource" :key="index"
                    :content="item.content"
                    :value="item.value"
                    :to="item.to"></vd-subnav-item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
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
  @Prop({ required: true, type: String })
  valueSource: string;

  @Prop({ default: () => [], type: Array })
  itemsSource: SubnavItem[];

  children: VdSubnavItem[] = [];
  selectedItem: VdSubnavItem;

  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }

  select(newItem: VdSubnavItem) {
    if (this.selectedItem === newItem) {
      return;
    }

    this.selectedItem = newItem;
    this.$emit('change', this.selectedItem.value);
  }

  addChild(child: VdSubnavItem) {
    this.children.push(child);
  }
}
</script>
