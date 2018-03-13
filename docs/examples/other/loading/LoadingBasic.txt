<template>
  <vd-flexbox gutter="auto">
    <vd-flexbox flex="100">
      <div style="height: 512px; width: 100%;">
        <vd-loading :size="size"
                    :multi-color="multiColor" :gray="gray"></vd-loading>
      </div>
    </vd-flexbox>
    <vd-flexbox flex="100"
                justify="center">
      <vd-radio-group v-model="size"
                      radio-type="button">
        <vd-radio value="small">small</vd-radio>
        <vd-radio value="medium">medium</vd-radio>
        <vd-radio value="large">large</vd-radio>
      </vd-radio-group>
    </vd-flexbox>
    <vd-flexbox flex="100"
                justify="center">
      <vd-toggle v-model="multiColor"
                 content-on="multi color on"
                 content-off="multi color off"></vd-toggle>
    </vd-flexbox>
    <vd-flexbox flex="100" justify="center">
      <vd-toggle v-model="gray"
                 content-on="gray on"
                 content-off="gray off"></vd-toggle>
    </vd-flexbox>
  </vd-flexbox>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { ControlSize } from 'void-ui';

@Component
export default class LoadingBasic extends Vue {
  size: ControlSize = 'large';
  multiColor: boolean = false;
  gray: boolean = false;
}
</script>
