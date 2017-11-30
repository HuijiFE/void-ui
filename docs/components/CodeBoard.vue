<template>
  <div class="code-board">
    <pre class="source"><code ref="codeblock" :class="lang"><slot v-pre></slot></code></pre>
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
import highlight from 'highlight.js';

@Component
export default class CodeBoard extends Vue {
  @Prop({ default: 'html' })
  lang: string;

  mounted() {
    highlight.highlightBlock(this.$refs.codeblock);
  }
}
</script>
