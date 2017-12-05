<template>
  <div>
    <VdToggle v-model="toggle"
              :contentStatus="true"
              v-for="item in 2"
              :key="item"
              :position="item % 2 === 0 ? 'left' : 'right'">
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </VdToggle>
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
export default class ToggleTips extends Vue {
  toggle = false;
}
</script>

<style>

</style>
