<template>
  <div>
    <VdToggle v-for="i in 4"
              :key="i"
              v-model="toggle"
              :shape="i % 2 === 1 ? 'circle' : 'rect'"></VdToggle>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ToggleBasic extends Vue {
  toggle = true;
}
</script>
