<template>
  <div class="vd-sidebar"
       :class="classes">
    <div class="vd-sidebar_pseudo-dark"></div>
    <div class="vd-sidebar_container"
         @mouseenter="toggleSoft"
         @mouseleave="toggleSoft">
      <slot></slot>
      <vd-sidebar-item v-for="(item, index) in itemsSource"
                       :key="index"
                       :props="item"></vd-sidebar-item>

      <div class="vd-sidebar_divide"></div>

      <slot name="bottom"></slot>
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
import VdSidebarItem from './VdSidebarItem.vue';
import { SidebarItem, SidebarMenu } from './VdSidebar';

@Component
export default class VdSidebar extends VdControl {
  @Prop({ default: 'left' })
  position: 'left' | 'right';

  @Prop({ default: () => [], type: Array })
  itemsSource: SidebarItem[];

  @Prop({ default: () => [], type: Array })
  menusSource: SidebarMenu[];

  expandedSoft: boolean = false;
  expandedHard: boolean = false;

  get classes(): ClassNames {
    return [
      `position-${this.position}`,
      {
        'expanded-soft': this.expandedSoft,
        'expanded-hard': this.expandedHard,
      },
    ];
  }

  toggleSoft() {
    this.expandedSoft = !this.expandedSoft;
  }

  toggleHard() {
    this.expandedHard = !this.expandedHard;
  }
}
</script>
