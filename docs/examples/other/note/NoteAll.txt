<template>
  <vd-flexbox>
    <vd-note :preset="`success`"
             :label="label"
             :description="description"></vd-note>
    <vd-note :preset="preset"
             :label="label"
             :description="description"></vd-note>
    <vd-note :preset="`warning`"
             :label="label"
             :description="description"></vd-note>
    <vd-note :preset="`error`"
             :label="label"
             :description="description"></vd-note>
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
export default class NoteBasic extends Vue {
  preset = 'primary';
  label = '标准';
  description = '提示内容';
}
</script>
