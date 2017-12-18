<template>
  <vd-flexbox>
    <vd-toggle v-model="status1"
               content-off="Status False"
               content-on="Status True"
               disabled></vd-toggle>
    <vd-toggle v-model="status2"
               content-off="Status False"
               content-on="Status True"
               disabled></vd-toggle>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ToggleDisabled extends Vue {
  status1 = false;
  status2 = true;
}
</script>
