<template>
  <div class="example-board">
    <div v-if="component"
         class="example">
      <component :is="component"></component>
    </div>
    <div v-if="source && showCode"
         class="source">
      <code-board :lang="lang">{{source}}</code-board>
    </div>
    <div v-if="source">
      <button class="show-button"
              @click="showCode = !showCode">&lt;/&gt;</button>
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
import CodeBoard from './CodeBoard.vue';

@Component({
  components: {
    CodeBoard,
  },
})
export default class DemoBoard extends Vue {
  showCode: boolean = false;

  @Prop() label: string;
  @Prop() description: string;

  @Prop({
    default: () => ({}),
  })
  component: any;

  @Prop({ default: 'html' })
  lang: string;

  @Prop() source: string;
}
</script>
