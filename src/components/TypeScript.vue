<template>
  <div class="test-component">
    <div class="logo ts"></div>
    <h1>TypeScript</h1>
    <h2>Hello, {{fullName}}!</h2>
    <p>TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
      <a href="http://www.typescriptlang.org">http://www.typescriptlang.org</a>
    </p>
    <hr/>
    <h1>Current Route Path: {{currentRout}}</h1>
    <div> Ghost: {{content.ghost}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';

@Component
export default class TypeScript extends Vue {
  get currentRout(): string {
    return this.$route.path;
  }

  get fullName() {
    return this.$store.getters.fullName;
  }

  content = {
    ghost: '',
  };

  beforeMount() {
    this.$store.dispatch('ghostGet', { routePath: this.$route.path, container: this.content });
  }
}
</script>
