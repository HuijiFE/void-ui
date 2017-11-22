<template>
  <div class="test-component">
    <div class="logo ts"></div>
    <h1>TypeScript</h1>
    <p>TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
      <a href="http://www.typescriptlang.org">http://www.typescriptlang.org</a>
    </p>
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
export default class TypeScript extends Vue {}
</script>
