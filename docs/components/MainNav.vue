<template>
  <div class="main-nav">
    <router-link class="nav-item first"
                 :to="`/${language}`">Void-UI</router-link>

    <span class="nav-separator"></span>

    <router-link class="nav-item"
                 :to="`/${language}/documentation`">Documenation</router-link>
    <router-link class="nav-item"
                 :to="`/${language}/changelog`">ChangeLog</router-link>
    <!-- <span class="nav-item">
      <button @click="setLanguage('zh-CN')">中</button>
      /
      <button @click="setLanguage('en-US')">En</button>
    </span> -->
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

@Component
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

