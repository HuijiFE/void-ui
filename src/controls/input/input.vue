<template>
  <div class="vd-input"
       :class="classes">
    <div class="input-outter">
      <div class="input-inner">
        <input v-model="value" />>
      </div>
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

export default class vdInput extends Vue {}
</script>

<style>

</style>
