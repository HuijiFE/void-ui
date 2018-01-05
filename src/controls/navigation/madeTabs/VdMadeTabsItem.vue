<template>
  <div v-show="active"
       class="vd-made-tabs-item">
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
import VdMadeTabs from './VdMadeTabs.vue';

@Component
export default class VdMadeTabsItem extends Vue {
  @Prop() label: string;

  @Prop() name: string;

  get active() {
    return this.name === this.parent.currentTabName;
  }

  get parent() {
    return this.$parent as VdMadeTabs;
  }
}
</script>

