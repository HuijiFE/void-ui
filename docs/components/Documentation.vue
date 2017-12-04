<template>
  <div class="documentation">
    <vd-flexbox gutter="auto">
      <vd-flexbox flex="30">
        <doc-index :language="language"
                   :configs="docIndexConfigs"></doc-index>
      </vd-flexbox>
      <vd-flexbox flex="70">
        <transition name="component-fade"
                    mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </vd-flexbox>
    </vd-flexbox>
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
import DocIndex from './DocIndex.vue';
import { DocConfig, enUS, zhCN } from 'docs/articles.config';

@Component({
  components: {
    DocIndex,
  },
})
export default class Documentation extends Vue {
  @Prop() language: string;
  get docIndexConfigs(): DocConfig[] {
    if (this.language === 'zh-CN') {
      return zhCN;
    }
    return enUS;
  }
}
</script>
