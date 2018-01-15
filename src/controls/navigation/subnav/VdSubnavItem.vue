<template>
  <router-link v-if="to"
               class="vd-subnav-item"
               :class="classes"
               :to="to"
               role="tab">
    <slot>{{content}}</slot>
  </router-link>
  <label v-else
         class="vd-subnav-item"
         :class="classes"
         role="tab">
    <slot>{{content}}</slot>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import VdSubnav from './VdSubnav.vue';

@Component
export default class VdSubnavItem extends Vue {
  @Prop() to: string;

  @Prop() value: string;

  @Prop() content: string;

  parent: VdSubnav;

  index: number = -1;

  status: 'selected' | 'hidden' = 'hidden';

  @Prop({ default: false })
  selected: boolean;

  get classes(): ClassNames {
    return [`status-${this.status}`];
  }
}
</script>
