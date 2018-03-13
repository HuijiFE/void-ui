
<template>
  <button class="vd-tabs-head_item"
          :class="classes"
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
import VdTabsItem from './VdTabsItem.vue';

@Component
export default class VdTabsHeadItem extends Vue {
  @Prop() item: VdTabsItem;

  get classes(): ClassNames {
    return [{ 'status-selected': this.item.status === 'selected' }];
  }

  select() {
    this.$emit('click', this.item);
  }
}
</script>
