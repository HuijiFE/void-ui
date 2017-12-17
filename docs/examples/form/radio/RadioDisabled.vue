<template>
  <vd-flexbox>
    <vd-radio :value="1"
              v-model="radioModel"
              disabled>Option 1</vd-radio>
    <vd-radio :value="2"
              v-model="radioModel"
              disabled>Option 2</vd-radio>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RadioDoisabled extends Vue {
  radioModel = 1;
}
</script>
