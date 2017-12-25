<template>
  <a class="vd-link"
     :href="href"
     :class="stylableClasses">
    <i class="link-icon fa"
       :class="'fa-' + icon"
       aria-hidden="true"></i>
    <span class="link-label">{{label}}</span>
  </a>
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

@Component
export default class VdLink extends VdStylableControl {
  @Prop({ required: true })
  icon: string;

  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  href: string;
}
</script>


