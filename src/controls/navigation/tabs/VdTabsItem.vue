<template>
  <div class="vd-tabs-item">
    <slot></slot>
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
import VdTabs from './VdTabs.vue';

@Component
export default class VdTabsItem extends Vue {
  @Prop({ required: true })
  label: string;

  index: number = -1;

  status: 'left-in' | 'left-out' | 'right-in' | 'right-out';

  parent: VdTabs;

  @Watch('parent.selectedItem')
  onSelectedItemChanged(newItem: VdTabsItem, oldItem: VdTabsItem) {
    if (newItem === oldItem) {
      return;
    }
    if (this === newItem) {
    }
    if (this === oldItem) {
    }
  }

  @Prop({ default: false })
  selected: boolean;
}
</script>
