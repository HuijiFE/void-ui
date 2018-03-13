<template>
  <div class="vd-tabs_item"
       :class="classes">
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
import anime from 'animejs';

@Component
export default class VdTabsItem extends Vue {
  @Prop({ required: true })
  label: string;

  parent: VdTabs;

  index: number = -1;

  status: 'selected' | 'hidden' = 'hidden';

  @Prop({ default: false })
  selected: boolean;

  get classes(): ClassNames {
    return [`status-${this.status}`];
  }
}
</script>
