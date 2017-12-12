<template>
  <button class="vd-tabs-head-item"
          @click="select">
    {{item.label}}
  </button>
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
import VdTabsItem from './VdTabsItem.vue';

@Component
export default class VdTabsHeadItem extends Vue {
  @Prop({ required: true })
  item: VdTabsItem;

  @Prop({ required: true })
  selectedItem: VdTabsItem;

  get index(): number {
    return this.item.index;
  }

  select() {
    this.$emit('change', this.item);
  }
}
</script>
