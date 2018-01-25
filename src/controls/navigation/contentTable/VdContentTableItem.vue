<template>
  <div class="vd-content-table-item">
    <a :href="`#${data.id}`"
       @click.self.stop="contentItemClick($event)"
       class="item-label"
       :class="active ? 'active' : ''">{{data.label}}</a>
    <div class="item-child"
         v-if="data.children">
      <vd-content-table-item v-for="child in data.children"
                             :data="child"
                             :key="child.id"></vd-content-table-item>
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
import VdContentTable from './VdContentTable.vue';

export interface TreeContentData {
  id: string;
  label: string;
  children?: TreeContentData[];
}

@Component
export default class VdContentTableItem extends Vue {
  @Prop({ default: () => ({}), type: Object })
  data: TreeContentData;

  @Inject() root: VdContentTable;

  active: boolean = false;
  children: VdContentTableItem[] = [];

  contentItemClick(event: Event) {
    this.root.itemClick(this, event.target as HTMLElement);
  }
}
</script>
