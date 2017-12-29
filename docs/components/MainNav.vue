<template>
  <div>
    <vd-sidebar></vd-sidebar>
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

@Component({
  components: {
    ThemeSwitch,
  },
})
export default class MainNav extends Vue {
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

