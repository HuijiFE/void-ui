<template>
  <vd-flexbox gutter="auto">

    <vd-flexbox flex="100">
      <vd-radio :value="1"
                v-model="option">Option 1</vd-radio>
      <vd-radio :value="2"
                v-model="option">Option 2</vd-radio>
      <vd-radio :value="3"
                v-model="option">Option 3</vd-radio>
    </vd-flexbox>
    <vd-flexbox flex="100">You selected option {{option}}.</vd-flexbox>

    <vd-flexbox flex="100">
      <vd-radio value="red"
                v-model="color">Red</vd-radio>
      <vd-radio value="green"
                v-model="color">Green</vd-radio>
      <vd-radio value="blue"
                v-model="color">Blue</vd-radio>
    </vd-flexbox>
    <vd-flexbox flex="100">You selected color {{color}}.</vd-flexbox>

  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RadioBasic extends Vue {
  option = 1;
  color = 'red';
}
</script>
