<template>
  <div class="example-board"
       :class="stylableClasses">
    <div v-if="component"
         class="example">
      <slot>
        <component :is="component"></component>
      </slot>
    </div>
    <div v-if="source && showCode"
         class="source">
      <code-board :lang="lang">{{source}}</code-board>
    </div>
    <div v-if="source">
      <button class="show-button"
              @click="showCode = !showCode">查看代码</button>
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
import { VdStylableControl } from 'void-ui';
import CodeBoard from './CodeBoard.vue';

@Component({
  components: {
    CodeBoard,
  },
})
export default class DemoBoard extends VdStylableControl {
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
