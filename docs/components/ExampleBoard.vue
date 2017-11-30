<template>
  <div class="demo-board">
    <div class="demo">
      <component :is="component"></component>
    </div>
    <code-board v-if="source"
                :lang="lang">{{source}}</code-board>
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
import CodeBoard from './CodeBoard.vue';

@Component({
  components: {
    CodeBoard,
  },
})
export default class DemoBoard extends Vue {
  @Prop() label: string;
  @Prop() description: string;

  @Prop({ default: () => {} })
  component: any;

  @Prop({ default: 'html' })
  lang: string;

  @Prop() source: string;
}
</script>
