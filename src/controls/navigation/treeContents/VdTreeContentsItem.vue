<template>
  <div role="tree-contents-item"
       class="vd-tree-contents-item">
    <a :href="`#${data.id}`"
       @click.self.stop="contentItemClick($event)"
       class="item-label"
       :class="active ? 'active' : ''">{{data.label}}</a>
    <div class="item-child"
         v-if="data.children">
      <vd-tree-contents-item v-for="child in data.children"
                             :data="child"
                             :key="child.id"></vd-tree-contents-item>
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
import VdTreeContents from './VdTreeContents.vue';

export interface TreeContentData {
  id: string;
  label: string;
  children?: TreeContentData[];
}

@Component
export default class VdTreeContentsItem extends Vue {
  active: boolean = false;

  children: VdTreeContentsItem[] = [];

  @Prop() data: TreeContentData;
  @Inject() root: VdTreeContents;

  contentItemClick(event: Event) {
    this.root.treeItemClick(this, event.target as HTMLElement);
  }
}
</script>
