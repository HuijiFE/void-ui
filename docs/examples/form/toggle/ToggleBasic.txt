<template>
  <vd-flexbox gutter="auto">

    <vd-flexbox flex="100"
                gutter="xsmall">
      <vd-flexbox flex="100">
        <vd-toggle v-model="status"
                   content-off="Status False"
                   content-on="Status True"></vd-toggle>
      </vd-flexbox>
      <vd-flexbox flex="100">status = {{status}}</vd-flexbox>
    </vd-flexbox>

    <vd-flexbox flex="100"
                gutter="xsmall">
      <vd-flexbox flex="100">
        <vd-toggle :value-off="2"
                   :value-on="4"
                   v-model="option"
                   content-off="Option 2"
                   content-on="Option 4"></vd-toggle>
      </vd-flexbox>
      <vd-flexbox flex="100">option = {{option}}</vd-flexbox>
    </vd-flexbox>

    <vd-flexbox flex="100"
                gutter="xsmall">
      <vd-flexbox flex="100">
        <vd-toggle value-off="lite"
                   value-on="dark"
                   v-model="theme"
                   content-off="Theme lite"
                   content-on="Theme dark"></vd-toggle>
      </vd-flexbox>
      <vd-flexbox flex="100">theme = '{{theme}}'</vd-flexbox>
    </vd-flexbox>

  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ToggleBasic extends Vue {
  status = false;
  option = 2;
  theme = 'lite';
}
</script>
