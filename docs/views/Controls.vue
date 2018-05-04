<template>
  <div class="controls">
    <vd-flexbox>
      <vd-flexbox></vd-flexbox>
      <vd-flexbox></vd-flexbox>
      <vd-flexbox></vd-flexbox>
    </vd-flexbox>
  </div>
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

/**
 * Controls subfield
 */
@Component
export default class Controls extends Vue {}
</script>