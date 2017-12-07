<template>
  <vd-flexbox gutter="xsmall">
    <vd-flexbox>
      <vd-toggle v-model="isOn"
                 shape="rect"></vd-toggle>
    </vd-flexbox>
    <vd-flexbox>
      <vd-toggle v-model="isOn"
                 shape="circle"></vd-toggle>
    </vd-flexbox>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ToggleBasic extends Vue {
  isOn = true;
}
</script>
