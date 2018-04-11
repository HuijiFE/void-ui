<template>
  <div class="index">
    <div class="vd-navbar vda-raise-3">
      <vd-clamp>
        <vd-menu :brand-to="`/${$route.params.locale}`"
                 brand-label="Void-UI"
                 size="large">
          <void-brand slot="brandImage"
                      color-left="lite"
                      color-right="lite"></void-brand>
          <vd-menu-item :to="`/${$route.params.locale}`">Home</vd-menu-item>
          <vd-menu-item :to="`/${$route.params.locale}/guidelines`">Guideline</vd-menu-item>
          <vd-menu-item :to="`/${$route.params.locale}/controls`">Controls</vd-menu-item>
          <vd-menu-item href="https://google.com"
                        target="_blank">Test</vd-menu-item>
          <vd-menu-item :href="`/${$route.params.locale}/controls`">Test</vd-menu-item>
          <vd-menu-item>Test</vd-menu-item>
        </vd-menu>
      </vd-clamp>
    </div>
    <vd-main>
      <router-view></router-view>
    </vd-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Inject, Model, Provide, Watch } from 'vue-property-decorator';

@Component
export default class Index extends Vue {}
</script>