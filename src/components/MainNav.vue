<template>
  <div class="main-nav">
    <template v-if="mode === 'router'">
      <router-link class="nav-item first"
                   to="/">Hello</router-link>
      <span class="nav-separator"></span>
      <router-link class="nav-item"
                   to="/vuejs">Vue.js</router-link>

      <router-link class="nav-item"
                   to="/typescript">TypeScript</router-link>

      <router-link class="nav-item"
                   to="/domghost">GhostDom</router-link>
    </template>

    <template v-else>
      <!-- use a-link istead of router-link to support multi pages app. -->
      <a class="nav-item first"
         href="/">Hello</a>
      <span class="nav-separator"></span>
      <a class="nav-item"
         href="/vuejs">Vue.js</a>
      <a class="nav-item"
         href="/typescript">TypeScript</a>
      <a class="nav-item"
         href="/domghost">GhostDom</a>
    </template>

  </div>
</template>

<script lang="ts">
// Vue.js and Property Decorator
// https://github.com/kaorun343/vue-property-decorator
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';

@Component
export default class MainNav extends Vue {
  @Prop() mode: 'router' | 'link' = 'router';
}
</script>

