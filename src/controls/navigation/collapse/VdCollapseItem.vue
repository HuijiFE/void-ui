<template>
  <div class="vd-collapse-item">
    <slot name="head">
      <div class="item-head">
        {{head}}
      </div>
    </slot>
    <span class="underline"></span>
    <slot name="body">
      <div class="item-body">{{body}}</div>
    </slot>
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
export default class VdCollaposeItem extends Vue {}
</script>


