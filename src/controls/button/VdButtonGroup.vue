<template>
  <div class="vd-button-group">
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

@Component({
  name: 'VdButtonGroup',
})
export default class VdButtonGroup extends Vue {}
</script>

