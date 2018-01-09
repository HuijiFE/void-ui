<template>
  <vd-flexbox flex="100">
    <vd-radio-group v-model="model1"
                    radio-type="button"
                    tone="warning">
      <vd-radio value="Javascript">radio1</vd-radio>
      <vd-radio value="TypeScript">radio2</vd-radio>
      <vd-radio value="Vue">radio3</vd-radio>
    </vd-radio-group>

    <vd-flexbox flex="100">You selected color {{model1}}.</vd-flexbox>
  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RadioGroup extends Vue {
  model1 = 'Javascript';
}
</script>

