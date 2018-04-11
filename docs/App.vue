<template>
  <router-view id="app"></router-view>
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

<style lang="scss">
body {
  overflow-y: scroll;
}
</style>

