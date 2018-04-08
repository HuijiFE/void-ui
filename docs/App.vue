<template>
  <div id="app"
       class="app">
    <button @click="changeLocale('en-US')">en-US</button>
    <button @click="changeLocale('zh-CN')">zh-CN</button>
    <nav>
      <router-link :to="`/${this.$route.params.locale}`">home</router-link>
      <router-link :to="`/${this.$route.params.locale}/guidelines`">Guidelines</router-link>
      <router-link :to="`/${this.$route.params.locale}/controls`">Controls</router-link>
      <router-link :to="`/${this.$route.params.locale}/tools`">Tools</router-link>
      <router-link :to="`/${this.$route.params.locale}/demos`">Demos</router-link>
    </nav>
    <router-view></router-view>
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

@Component
export default class App extends Vue {
  public changeLocale(locale: string): void {
    this.$router.push({
      params: {
        locale,
      },
    });
  }
}
</script>
