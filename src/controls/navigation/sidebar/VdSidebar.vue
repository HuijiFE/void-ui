<template>
  <div class="vd-sidebar"
       :class="classes">
    <div class="vd-sidebar_pseudo-dark"></div>
    <div class="vd-sidebar_container"
         @mouseenter="toggle"
         @mouseleave="toggle">
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
import anime from 'animejs';
import { VdControl } from 'src/controls/base/VdControl';

@Component
export default class VdSidebar extends VdControl {
  expanded: boolean = false;

  position: 'left' | 'right' = 'left';

  get classes(): ClassNames {
    return [
      `position-${this.position}`,
      {
        expanded: this.expanded,
      },
    ];
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
</script>
