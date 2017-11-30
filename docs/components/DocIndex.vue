<template>
  <ul class="doc-index">
    <li v-for="config in configs"
        :key="config.name"
        class="index-item">
      <div v-if="config.children">
        {{config.name}}
        <doc-index :language="language"
                   :configs="config.children"></doc-index>
      </div>
      <router-link v-else
                   :to="`/${language}/documentation/${config.path}`">{{config.name}}</router-link>
    </li>
  </ul>
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
import { DocConfig } from 'docs/articles.config';

@Component({
  name: 'DocIndex',
})
export default class DocIndex extends Vue {
  @Prop() language: string;
  @Prop() configs: DocConfig[];
}
</script>
