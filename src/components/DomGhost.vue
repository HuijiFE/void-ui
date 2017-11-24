<template>
  <div class="test-component">
    <h1>DomGhost</h1>
    <h2>Hello, {{fullName}}!</h2>
    <p>A progressive, incrementally-adoptable JavaScript framework for building UI on the web.
      <a href="http://vuejs.org">http://vuejs.org</a>
    </p>
    <hr/>
    <h1>Current Route Path: {{currentRout}}</h1>
    <div id="content"
         style="maxWidth: 1200px; margin: 0 auto;">

      <h1 id="title"
          v-html="content.title">
      </h1>

      <div id="siteSub"
           v-html="content.siteSub"></div>

      <div id="pageSubtitle"
           v-html="content.pageSubtitle"></div>

      <div id="undelete"
           v-html="content.undelete"></div>

      <div id="bodyContent"
           v-html="content.bodyContent"></div>

      <div id="printFooter"
           v-html="content.printFooter"></div>

      <div id="debugHtml"
           v-html="content.debugHtml"></div>

      <div id="footer"
           v-html="content.footer"></div>
    </div>
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
export default class DomGhost extends Vue {
  get currentRout(): string {
    return this.$route.path;
  }

  get fullName() {
    return this.$store.getters.fullName;
  }

  get ghostText(): string {
    return this.$store.state.domGhost.ghostText;
  }

  content = {
    title: '',
    siteSub: '',
    pageSubtitle: '',
    undelete: '',
    bodyContent: '',
    printFooter: '',
    debugHtml: '',
    footer: '',
  };

  beforeMount() {
    this.$store.dispatch('ghostGet', {
      routePath: this.$route.path,
      container: this.content,
    });
  }
}
</script>
