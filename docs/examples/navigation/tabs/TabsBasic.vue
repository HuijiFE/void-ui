<template>
  <div>
    <vd-tabs>
      <vd-tabs-item label="a"
                    :selected="true">aaaa</vd-tabs-item>
      <vd-tabs-item label="b">bbbb</vd-tabs-item>
      <vd-tabs-item label="c">cccc</vd-tabs-item>
      <vd-tabs-item label="d">dddd</vd-tabs-item>
      <vd-tabs-item label="e">eeee</vd-tabs-item>
    </vd-tabs>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';

@Component
export default class TabsBasci extends Vue {}
</script>
