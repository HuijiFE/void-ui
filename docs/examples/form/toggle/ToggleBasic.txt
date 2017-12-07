<template>
  <vd-flexbox gutter="xsmall">

    <vd-flexbox gutter="xsmall">
      <vd-flexbox flex="100">
        <vd-toggle v-model="modelBoolean"></vd-toggle>
      </vd-flexbox>
      <vd-flexbox flex="100">
        modelBoolean: {{modelBoolean}}
      </vd-flexbox>
    </vd-flexbox>

    <vd-flexbox gutter="xsmall">
      <vd-flexbox flex="100">
        <vd-toggle v-model="modelString"
                   value-on="on"
                   value-off="off"></vd-toggle>
      </vd-flexbox>
      <vd-flexbox flex="100">
        modelString: {{modelString}}
      </vd-flexbox>
    </vd-flexbox>

    <vd-flexbox gutter="xsmall">
      <vd-flexbox flex="100">
        <vd-toggle v-model="modelNumber"
                   :value-on="1"
                   :value-off="0"></vd-toggle>
      </vd-flexbox>
      <vd-flexbox flex="100">
        modelNumber: {{modelNumber}}
      </vd-flexbox>
    </vd-flexbox>

    <vd-flexbox gutter="xsmall">
      <vd-flexbox flex="100">
        <vd-toggle disabled="true"></vd-toggle>
      </vd-flexbox>
      <vd-flexbox flex="100">
        disabled
      </vd-flexbox>
    </vd-flexbox>

  </vd-flexbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ToggleBasic extends Vue {
  modelBoolean = true;
  modelString = 'on';
  modelNumber = 1;
}
</script>
