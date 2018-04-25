<template>
  <router-view id="app"
               class="page-wrapper"></router-view>
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

/**
 * Void-UI document web site app
 */
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

.page-wrapper {
  min-height: 100%;
}
</style>

