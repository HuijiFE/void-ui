<template>
  <div @click="itemClick"
       class="vd-nav-tabs-item"
       :class="classes">
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
import VdNavTabs from './VdNavTabs.vue';

@Component
export default class VdNavTabsItem extends Vue {
  @Prop({ required: true, type: String })
  index: string;

  get active() {
    return this.index === this.parent.activeIndex;
  }

  get classes() {
    return [{ active: this.active }];
  }

  get parent() {
    return this.$parent as VdNavTabs;
  }

  itemClick() {
    this.parent.select(this);
  }
}
</script>
