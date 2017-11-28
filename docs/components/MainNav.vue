<template>
  <div class="main-nav">
    <router-link class="nav-item first"
                 to="/">Hello</router-link>
    <span class="nav-separator"></span>

    <router-link class="nav-item"
                 to="/zhcn/controls/button">button</router-link>
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
export default class MainNav extends Vue {
  @Prop() mode: 'router' | 'link' = 'router';
}
</script>

