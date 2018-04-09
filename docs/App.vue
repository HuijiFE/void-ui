<template>
  <div id="app"
       class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Inject, Model, Provide, Watch } from 'vue-property-decorator';

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
