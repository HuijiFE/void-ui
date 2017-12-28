<template>
  <div class="vd-link-list">
    <a v-for="item in linkList"
       :key="item.href"
       class="link-item"
       :class="stylableClasses"
       :href="item.href"
       target="_blank"
       rel="noopener noreferrer">
      <i class="link-icon fa"
         :class="'fa-' + item.icon"
         aria-hidden="true"></i>
      <span class="link-label">{{item.label}}</span>
    </a>
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

interface LinkListItem {
  icon: string;
  label: string;
  href: string;
}

@Component
export default class VdLinkList extends VdStylableControl {
  @Prop({ default: [] })
  linkList: LinkListItem[];
}
</script>


