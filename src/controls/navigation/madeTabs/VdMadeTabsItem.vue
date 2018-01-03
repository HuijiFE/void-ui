<template>
  <div class="vd-made-tabs-item">
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

@Component
export default class VdMadeTabsItem extends Vue {
  @Prop() label: string;

  get parent() {
    console.log(this.$parent);
    return this.$parent;
  }
}
</script>

