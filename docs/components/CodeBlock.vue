<template>
  <div class="code-block">
    <pre>
      <slot v-pre></slot>
    </pre>
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
export default class CodeBlock extends Vue {}
</script>
