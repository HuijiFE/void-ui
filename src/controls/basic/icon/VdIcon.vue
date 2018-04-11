<template>
  <i v-if="this.fa"
     class="fa"
     :class="`fa-${fa}`"></i>
</template>

<script lang="ts">
import { Vue, Component, Emit, Inject, Model, Prop, Provide, Watch } from 'vue-property-decorator';
import { VdControl } from '@void/controls/base/VdControl';

/**
 * Control Icon
 */
@Component
export default class VdIcon extends VdControl {
  @Prop({ type: String })
  private fa: string;

  @Prop({ type: String })
  private icon: string;
}
</script>