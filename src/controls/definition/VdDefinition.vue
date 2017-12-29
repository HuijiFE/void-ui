<template>
  <div class="vd-definition"
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
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdDefinition extends VdStylableControl {
  @Prop() label: string;

  get classes(): ClassNames {
    return [`theme-${this.theme || this.$void.theme}`];
  }
}
</script>

