<template>
  <div class="demo-board">
    <div class="demo">
      <component :is="component"></component>
    </div>
    <div v-if="$slots.default"
         class="source">
      <pre><code ref="codeblock" class="html"><slot v-pre></slot></code></pre>
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
import highlight from 'highlight.js';

@Component
export default class DemoBoard extends Vue {
  @Prop() label: string;
  @Prop() description: string;

  @Prop({ default: () => {} })
  component: any;

  mounted() {
    highlight.highlightBlock(this.$refs.codeblock);
  }
}
</script>
