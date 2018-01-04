<template>
  <div>
    <vd-sidebar>
      <vd-sidebar-item icon="line-chart"
                       size="large"
                       branded
                       :to="`/${language}`">Void-UI</vd-sidebar-item>
      <vd-sidebar-item icon="book"
                       :to="`/${language}/documentation`">Documentation</vd-sidebar-item>
      <vd-sidebar-item icon="github"
                       href="https://github.com/HuijiFE">GitHub</vd-sidebar-item>


      <vd-sidebar-item slot="bottom"
                       :icon="themeIcon"
                       @click="toggleTheme">Toggle Theme</vd-sidebar-item>
    </vd-sidebar>
    <!-- <router-link class="nav-item first"
                 :to="`/${language}`">Void-UI</router-link>

    <span class="nav-separator"></span>

    <router-link class="nav-item"
                 :to="`/${language}/test`">Test</router-link>

    <theme-switch></theme-switch>
    <router-link class="nav-item"
                 :to="`/${language}/documentation`">Documenation</router-link>
    <router-link class="nav-item"
                 :to="`/${language}/changelog`">ChangeLog</router-link> -->
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
import ThemeSwitch from './ThemeSwitch.vue';
import { VdControl } from 'void-ui';

@Component({
  components: {
    ThemeSwitch,
  },
})
export default class MainNav extends VdControl {
  get themeIcon(): string {
    return this.$void.theme === 'lite' ? 'sun-o' : 'moon-o';
  }

  toggleTheme() {
    console.warn('toggle theme');
    this.$void.theme = this.$void.theme === 'lite' ? 'dark' : 'lite';
  }

  get language(): string {
    return this.$route.path.startsWith('/zh-CN') ? 'zh-CN' : 'en-US';
  }

  setLanguage(targetLanguage: string) {
    if (this.language === targetLanguage) {
      return;
    }
    this.$router.push(this.$route.path.replace(this.language, targetLanguage));
  }
}
</script>

