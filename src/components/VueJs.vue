<template>
  <div class="test-component">
    <div class="logo vue"></div>
    <h1>Vue.js</h1>
    <h2>Hello, {{fullName}}!</h2>
    <p>A progressive, incrementally-adoptable JavaScript framework for building UI on the web.
      <a href="http://vuejs.org">http://vuejs.org</a>
    </p>
    <hr/>
    <h1>Current Route Path: {{currentRout}}</h1>
    <div> Ghost: {{content.ghost}}</div>
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
export default class VueJs extends Vue {
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
    this.$store.dispatch('ghostGet', {
      routePath: this.$route.path,
      container: this.content,
    });
  }
}
</script>
