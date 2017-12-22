<template>
  <div>
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
import VdSubnav from './VdSubnav.vue';

@Component
export default class VdSubnavItem extends Vue {
  @Prop({ required: true })
  label: string;

  parent: VdSubnav;

  index: number = -1;

  status: 'selected' | 'hidden' = 'hidden';

  @Prop({ default: false })
  selected: boolean;
}
</script>
