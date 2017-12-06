<template>
  <vd-flexbox gutter="xsmall">

    <vd-flexbox flex="auto">
      <vd-flexbox flex="100">
        <VdToggle v-model="dataBoolean"></VdToggle>
      </vd-flexbox>
      <vd-flexbox flex="100">
        dataBoolean: {{dataBoolean}}
      </vd-flexbox>
    </vd-flexbox>

    <vd-flexbox flex="auto">
      <vd-flexbox flex="100">
        <VdToggle v-model="dataString"
                  value-on="on"
                  value-off="off"></VdToggle>
      </vd-flexbox>
      <vd-flexbox flex="100">
        dataString: {{dataString}}
      </vd-flexbox>
    </vd-flexbox>

    <vd-flexbox flex="auto">
      <vd-flexbox flex="100">
        <VdToggle v-model="dataNumber"
                  :value-on="0"
                  :value-off="1"></VdToggle>
      </vd-flexbox>
      <vd-flexbox flex="100">
        dataNumber: {{dataNumber}}
      </vd-flexbox>
    </vd-flexbox>

  </vd-flexbox>
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
export default class ToggleBasic extends Vue {
  dataBoolean = true;
  dataString = 'off';
  dataNumber = 0;
}
</script>
