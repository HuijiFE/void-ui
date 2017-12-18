<template>
  <div>
    <vd-note :preset="preset"
             :label="label"
             :description="description"></vd-note>

  </div>
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
  preset = '';
  label = '提示';
  description = '提示内容';
  // genre = 'lite';
}
</script>
