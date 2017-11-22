<template>
  <div class="main-nav">
    <!-- <router-link class="nav-item first"
                 to="/">Hello</router-link> -->
    <a class="nav-item first"
       href="/">Hello</a>
    <span class="nav-separator"></span>
    <!-- <router-link class="nav-item"
                 to="/vuejs">Vue.js</router-link>
    <router-link class="nav-item"
                 to="/typescript">TypeScript</router-link> -->
    <a class="nav-item"
       href="/vuejs">Vue.js</a>
    <a class="nav-item"
       href="/typescript">TypeScript</a>
  </div>
</template>

<script lang="ts">
// Vue.js and Property Decorator
// https://github.com/kaorun343/vue-property-decorator
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
export default class MainNav extends Vue {}
</script>

