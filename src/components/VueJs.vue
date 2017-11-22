<template>
  <div class="test-component">
    <div class="logo vue"></div>
    <h1>Vue.js</h1>
    <p>A progressive, incrementally-adoptable JavaScript framework for building UI on the web.
      <a href="http://vuejs.org">http://vuejs.org</a>
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
export default class VueJs extends Vue {}
</script>
