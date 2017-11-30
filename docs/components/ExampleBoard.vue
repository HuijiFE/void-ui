<template>
  <div class="demo-board">
    <div class="demo">
      <component :is="component"></component>
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
import CodeBlock from './CodeBlock.vue';

@Component({
  components: {
    CodeBlock,
  },
})
export default class DemoBoard extends Vue {
  @Prop() label: string;
  @Prop() description: string;

  @Prop({ default: () => {} })
  component: any;
}
</script>
