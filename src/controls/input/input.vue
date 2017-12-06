<template>
  <div class="vd-input"
       :class="classes">
    <div class="input-outter">
      <div class="input-inner">
        <div class="prefix"></div>
        <input v-model="value" />>
        <div class="suffix"></div>
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

@Component
export default class vdInput extends Vue {
  private get classes() {
    return [];
  }
}
</script>

<style>

</style>
