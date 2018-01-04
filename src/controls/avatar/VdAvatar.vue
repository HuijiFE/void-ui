<template>
  <div class="vd-avatar" :class="classes">
      <div class="item-top">
         <img :src="src">
      </div>
      <div class="item-bottom">
         <span class="item-label">{{label}}</span>
         <span class="item-description">{{description}}</span>
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
export default class VdAvatarItem extends VdStylableControl {
  @Prop() src: string;
  @Prop() label: string;
  @Prop() description: string;

  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }
}
</script>
