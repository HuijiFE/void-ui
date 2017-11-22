<template>
  <div class="hello">
    <hello-world program-language="TypeScript"></hello-world>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HelloWorld from 'src/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Hello extends Vue {}
</script>
