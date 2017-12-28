<template>
  <div class="vd-data-card"
       :class="classes">
    <div class="card-icon"
         :class="`tone-${tone}`">
      <i class="fa"
         :class="`fa-${icon}`"
         aria-hidden="true"></i>
    </div>
    <div class="card-body">
      <slot></slot>
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

@Component
export default class VdDataCard extends VdStylableControl {
  @Prop() icon: string;

  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }
}
</script>

