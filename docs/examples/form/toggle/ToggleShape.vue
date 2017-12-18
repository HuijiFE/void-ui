<template>
  <vd-flexbox gutter="auto">
    <vd-flexbox>
      <vd-toggle v-model="status"
                 content-off="Status False"
                 content-on="Status True"
                 shape="rect"></vd-toggle>
    </vd-flexbox>
    <vd-flexbox>
      <vd-toggle v-model="status"
                 content-off="Status False"
                 content-on="Status True"
                 shape="circle"></vd-toggle>
    </vd-flexbox>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ToggleShape extends Vue {
  status = true;
}
</script>
